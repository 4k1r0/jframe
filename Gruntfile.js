/**
 * Ce fichier sert à générer le(s) fichier(s) JS et CSS minifié(s) et fusionné(s)
 *
 * Pour utiliser grunt pour la minification, il faut installer les plugins suivant en ligne de commandes :
 *      Pour les CSS : npm install grunt-contrib-cssmin --save
 *      Pour les JS  : npm install grunt-contrib-uglify --save
 * (Si il y a un échec avec l'erreur ENAMETOOLONG, passer par une console nodejs sous windows pour le faire)
 *
 */
module.exports = function(grunt) {

    grunt.initConfig({

        // On liste les fichiers JS à minifier et fusionner
        uglify: {
            target: {
                files: {
                    "dist/jframe.min.js": [
                        "src/jframe.js",
                    ]
                }
            }
        }

    });

    // On load le plugin grunt pour la minification des JS
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // On défini la commande à exécuter et les plugins qui seront exécutés par celle ci
    grunt.registerTask("build", ["uglify"]);
};