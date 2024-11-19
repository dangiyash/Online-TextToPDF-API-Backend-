const PDFDocument = require("pdfkit");
const fs = require("fs");

const pdfcontrol = (req, res) => {
  const { title, content } = req.body;

  // Validate incoming data
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required." });
  }

  const doc = new PDFDocument();
  const filename = `output-${Date.now()}.pdf`;
  const stream = fs.createWriteStream(filename);

  // Generate PDF
  doc.pipe(stream);
  doc.fontSize(25).text(title, { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(content, { align: "left" });
  doc.end();

  // Send PDF to client after generation
  stream.on("finish", () => {
    res.download(filename, () => {
      fs.unlinkSync(filename); // Delete file after download
    });
  });

  console.log("PDF generated successfully.");
};

module.exports = pdfcontrol;
