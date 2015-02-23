/**
 * Created by Pedro on 23-02-2015.
 */
var gulp = require("gulp");

gulp.task("default", function () {
    //console.log("hello Gulp");

    return gulp.src("./public/js/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});