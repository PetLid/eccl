class CanvasWrapper
{
    constructor(options)
    {
        this.displayMode = options.displayMode || "fullscreen";
        this.resolution = { x: options.resolution.x || window.innerWidth , y: options.resolution.y: window.innerHeight };

        // Create canvas element
        if (options.id)
        {
            this.canvas = document.getElementById(options.id);
        }
        else
        {
            var id = "canvas-" + CanvasWrapper.nr++;
            this.canvas = document.createElement("canvas");
            this.canvas.setAttribute("id", id);
        }

        // Set up canvas dimensions
        this.canvas.width = this.resolution.x;
        this.canvas.height = this.resolution.y;

        // Configure display settings
        if (this.displayMode === "fullscreen")
        {
            window.addEventListener("resize", function()
            {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            });
        }
    }
}

CanvasWrapper.nr = 0;

module.exports = CanvasWrapper;
