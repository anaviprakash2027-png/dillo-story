/*SCROLLYTELLY: start function when detect user scrolling*/

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight);
    const maxBarHeight = this.window.innerHeight * 0.8;
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.height = (scrollPercent * maxBarHeight) + "px";
});

/*SCROLLYTELLY: initiatlize variables*/
var container = d3.select("#scroll");
var figure = container.select("figure");
var article = container.select("article");
var step = article.selectAll(".step");
/*SCROLLYTELLY: call scrollama function*/
var scroller = scrollama();

/*SCROLLYTELLY: resize media box (right) according to step image*/
function handleResize() {
    var figureWidth = figure.node().offsetWidth;
    var figureHeight = figureWidth;
    figure.style("height", figureHeight + "px");

    scroller.resize();
}

/*SCROLLYTELLY: create media array to store image links*/
var media = [
        {
            /*Step 0 image link */
            type: "img",
            src: "DilloPoll.jpg",
            alt: "Mayfest Productions releases poll hinting at potential music genres for 54th Dillo Day",
        },
        {
            /*Step 2 image link */
            type: "img",
            src: "TDNWArticle.jpg",
            alt: "The Daily Northwestern article announcing new Dillo Day stag",
        }
        ];

/*SCROLLYTELLY: activate steps in order*/
function handleStepEnter(response) {
    step.classed("is-active", (d, i) => i === response.index);
            
    /*activate Step 0*/
    if (response.index === 0) {
        const item = media[0];
                
        d3.select("#scrolly-media-container").html(`
            <img src="${item.src}" class="scrolly-media" alt="${item.alt}">
            `);
                
        return;

    }
                
    /*activate Step 1*/
    if (response.index === 1) {
        d3.select("#scrolly-media-container").html(`
            <iframe src="https://flo.uri.sh/visualisation/27863444/embed"
            class="scrolly-media"
            frameborder="0"
            scrolling="no"
            style="width:100%;height:100%;"
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation">
            </iframe>
            `);
                        
        d3.select("#scrolly-link").attr("href", "").text("");
                        
        return;
    }
                    
                    
    /*activate Step 2*/
    if (response.index === 2) {
        const item = media[1];
                        
        d3.select("#scrolly-media-container").html(`
            <img src="${item.src}" class="scrolly-media" alt="${item.alt}">
            `);
                            
        return;
                        
    }
}

/*SCROLLYTELLY:activate steps when reach certain scroll position*/
function init() {
    handleResize();
    scroller
    .setup({
        step: "article .step",
        offset: 0.30
    })
    .onStepEnter(handleStepEnter);
    window.addEventListener("resize", handleResize);
}

init();