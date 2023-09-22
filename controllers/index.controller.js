const getHome = (req, res) => {
    res.render('home', { 
        title: "Home",
        css: ["home"]
    });
};

const getAbout = (req, res) => {
    res.render('about', { 
        title: "About Me",
        css: ["about"]
    });
};

const getPortfolio = (req, res) => {
    res.render('portfolio', { 
        title: "My Portfolio",
        css: ["portfolio"]
    });
};

// export functions to be used in router
module.exports = {
    getHome,
    getAbout,
    getPortfolio
};