export default function()
{
    function init(canvas)
    {
        this.canvas = canvas;

        this.rectangle =
        {
            x: 0,
            y: 0,
            dx: 5,
            dy: 5,
            width: 20,
            height: 20
        };
    }


    function update()
    {
        var rect = this.rectangle;

        rect.x += rect.dx;
        rect.y += rect.dy;

        var canvas = this.canvas;

        rect.dx = rect.x <= 0 || rect.x + rect.width >= canvas.width ? -rect.dx : rect.dx;
        rect.dy = rect.y <= 0 || rect.y + rect.height >= canvas.height ? -rect.dy : rect.dy;
    }

    function render(ctx)
    {
        var rect = this.rectangle;

        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }

    return {
        'init': init,
        'update': update,
        'render': render
    };
}
