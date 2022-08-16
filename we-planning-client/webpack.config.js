/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const {
    container: { ModuleFederationPlugin }
} = webpack;
const deps = require("./package.json").dependencies;

const depsShared = Object.keys(deps).reduce((obj, item) => {
    return {
        ...obj,
        [item]: {
            singleton: true,
            eager: true,
            requiredVersion: deps[item],
            // version: deps[item],
            strictVersion: true
        }
    };
}, {});

const createPlugins = env => {
    const isLocal = env === "local";
    const envPath = isLocal ? "./.env" : `./.env.${env}`;

    return [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            favicon: "./public/favicon.ico",
            manifest: "./public/manifest.json"
        }),
        new ModuleFederationPlugin({
            name: "PecConvWdc",
            filename: "remoteEntry.js",
            exposes: {
                "./WdcPage": "./src/Page/Wdc/WdcProvider"
            },
            shared: depsShared
        }),
        new Dotenv({
            path: envPath
        })
    ];
};
const rulesForTypescript = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: "ts-loader"
};
const ruleForJavaScript = {
    test: /\.js$/,
    loader: "babel-loader",
    options: {
        presets: [
            [
                "@babel/preset-react",
                {
                    runtime: "automatic"
                }
            ]
        ]
    }
};
const rulesForSvg = {
    test: /\.svg$/,
    use: [
        {
            loader: "svg-url-loader",
            options: {
                limit: 10000
            }
        }
    ]
};
const rulesForFiles = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
        {
            loader: "file-loader"
        }
    ]
};
const rules = [
    rulesForTypescript,
    ruleForJavaScript,
    rulesForSvg,
    rulesForFiles
];
module.exports = ({ env }, argv) => {
    const { mode } = argv;

    const appPath = {
        local: "http://localhost:3000/",
        development: "https://pec-conv-wdc-pec-ar-desa.apps.osen02.claro.amx/",
        test: "https://pec-conv-wdc-pec-ar.apps.osen02.claro.amx/",
        production: "https://pec-conv-wdc-pec-ar.apps.osep02.claro.amx/"
    };

    const plugins = createPlugins(env);
    return {
        entry: "./src/index.tsx",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "build"),
            publicPath: appPath[env]
        },
        plugins,
        module: {
            rules
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        devtool: "inline-source-map",
        mode,
        devServer: {
            open: true,
            port: 3000,
            historyApiFallback: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers":
                    "X-Requested-With, content-type, Authorization"
            }
        }
    };
};
