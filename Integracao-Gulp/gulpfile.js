import gulp from "gulp";
import deleteAsync from "del";
import browserify from "browserify";
import source from "vinyl-source-stream";
import tsify from "tsify";
import uglify from "gulp-uglify";
import rename from "gulp-rename"

async function limparDist() {
    return deleteAsync(["dist"])
}

async function copiarHTML() {
    return gulp.src("public/**/*").pipe(gulp.dest("dist"))
}

async function gerarJS() {
    return browserify({
        basedir: ".",
        entries: ["src/main.ts"]
    }).plugin(tsify).bundle().pipe(source("app.js")).pipe(gulp.dest("dist"))
}

async function gerarJSProducao() {
    return gulp.src("dist/app.js").pipe((rename("app.min.js"))).pipe(uglify()).pipe(gulp.dest("dist"))
}

export default gulp.series(
    limparDist,
    gulp.parallel(copiarHTML, gerarJS),
    gerarJSProducao
)

// npm init -y
// sudo npm i -g gulp-cli
// tsc --init
// sudo npm i --save-dev typescript gulp@4.0.0 gulp-typescript browserify tsify vinyl-source-stream del