import { Font, LedMatrix } from "rpi-led-matrix";

let matrix;

export const init = () => {
    matrix = new LedMatrix(
        {
            ...LedMatrix.defaultMatrixOptions(),
            rows: 32,
            cols: 64,
        },
        LedMatrix.defaultRuntimeOptions()
    );
};

export const clear = () => {
    matrix.clear();
};

export const drawText = (text, row, col) => {
    console.log("drawText", text, row, col);

    const x = col * 24;
    const y = (row + 1) * 24;

    const font = new Font(
        "helvR12",
        `${process.cwd()}/node_modules/rpi-led-matrix/fonts/${fontName}.bdf`
    );

    matrix
        .clear()
        .font(font)
        .brightness(100)
        .fgColor(0xffffff)
        .drawText(text, x, y)
        .sync();
};

export const drawPixel = (x, y) => {
    matrix.fgColor(0xffffff).setPixel(x, y).sync();
};
