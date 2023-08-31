const getHomePage = (req, res) => {
    res.send('hello')
}

const getTest = (req, res) => {
    res.render('test.ejs')
}

module.exports = {
    getHomePage, getTest
}