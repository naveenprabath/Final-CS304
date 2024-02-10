const router = require("express").Router();
const clearenceReport = require("../models/clearenceReport");

router.get("/", (req, res) => {
  clearenceReport
    .find()
    .then((clearenceReports) => res.json(clearenceReports))
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.route("/ADDClearance").post((req, res) => {
  const { studentName, studentId, email, combination, clearenceDescription, status, totalAmount } = req.body;

  const newclearenceReport = {
    studentName,
    studentId,
    email,
    combination,
    clearenceDescription,
    status,
    totalAmount,
  };

  clearenceReport
    .create(newclearenceReport)
    .then(() => res.json("Clearance report added"))
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.get('/clearanceSummary/:email', async (req, res) => {
  const email = req.params.email;
  try {
    const summary = await clearenceReport.aggregate([
      { $match: { email: email } },
      {
        $group: {
          _id: null,
          studentName: { $first: '$studentName' },
          studentId: { $first: '$studentId' },
          email: { $first: '$email' },
          combination: { $first: '$combination' },
          departmentClearance: {
            $max: {
              $cond: [
                { $eq: ['$status', '1'] },
                { $cond: [{ $eq: ['$clearenceDescription', '1'] }, "Paid", "Pending"] },
                "Pending"
              ]
            }
          },
          libraryClearance: {
            $max: {
              $cond: [
                { $eq: ['$status', '1'] },
                { $cond: [{ $eq: ['$clearenceDescription', '2'] }, "Paid", "Pending"] },
                "Pending"
              ]
            }
          },
          hostalClearance: {
            $max: {
              $cond: [
                { $eq: ['$status', '1'] },
                { $cond: [{ $eq: ['$clearenceDescription', '3'] }, "Paid", "Pending"] },
                "Pending"
              ]
            }
          },
          sportsClearance: {
            $max: {
              $cond: [
                { $eq: ['$status', '1'] },
                { $cond: [{ $eq: ['$clearenceDescription', '4'] }, "Paid", "Pending"] },
                "Pending"
              ]
            }
          },
          financialAidClearance: {
            $max: {
              $cond: [
                { $eq: ['$status', '1'] },
                { $cond: [{ $eq: ['$clearenceDescription', '5'] }, "Paid", "Pending"] },
                "Pending"
              ]
            }
          },
          total: { $sum: { $cond: [{ $eq: ['$status', '2'] }, '$totalAmount', 0] }}
        }
      }
    ]);
    res.json(summary);
  } catch (error) {
    console.error('Error fetching clearance summary:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/search", (req, res) => {
  const { studentId, description } = req.query;

  const query = {
    studentId: { $regex: new RegExp(studentId, 'i') },
    clearenceDescription: { $regex: new RegExp(description, 'i') }
  };

  clearenceReport.find(query)
    .then((clearenceReport) => res.json(clearenceReport))
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await clearenceReport.findByIdAndDelete(id);
    res.json({ message: 'Clearance report deleted successfully' });
  } catch (error) {
    console.error('Error deleting clearance report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
