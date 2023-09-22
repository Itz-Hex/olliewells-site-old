const getServices = (req, res) => {
    res.render('services', { 
        title: "My Services",
        css: ["services"]
    });
};

// const postServices = (req, res) => {
//     var cost = 0;
//     var time = 0;
//     var monthlyCost = 0;
// };

module.exports = {
    getServices
    //postServices
};