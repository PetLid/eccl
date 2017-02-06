export default function()
{
    var canvas,
        rectangle = {};

    function init(_canvas)
    {
        canvas = _canvas;

        rectangle =
        {
            x: 0,
            y: 0,
            dx: 500,
            dy: 500,
            width: 20,
            height: 20
        };
    }

    function update(state)
    {
        var rect = rectangle;
        var dt = state.dt;

        rect.x += rect.dx * dt;
        rect.y += rect.dy * dt;

        rect.dx = rect.x <= 0 || rect.x + rect.width >= canvas.width ? -rect.dx : rect.dx;
        rect.dy = rect.y <= 0 || rect.y + rect.height >= canvas.height ? -rect.dy : rect.dy;
    }

    function render(ctx)
    {
        var rect = rectangle;

        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }

    return {
        'init': init,
        'update': update,
        'render': render
    };
};
