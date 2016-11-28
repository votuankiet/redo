var gulp = require('gulp');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("client/tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("client/dist"));
});

gulp.task('hello', function() {
  console.log('Hello');
});