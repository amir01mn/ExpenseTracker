const Transaction = require('../models/Transaction');

// @desc     Get all transactions
// @route    GET /api/v1/transactions
// @access   Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
        
    } catch (error) {
        
    }
}

// @desc     Add all transaction
// @route    POST /api/v1/transactions
// @access   Public
exports.addTransaction = async (req, res, next) => {
    res.send('POST transaction');
}

// @desc     Delete all transaction
// @route    DELETE /api/v1/transactions/:id
// @access   Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction');
}