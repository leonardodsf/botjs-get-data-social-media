'use strict';

const puppeteer = require('puppeteer');
const connection = require('../database/db');

const getSocialFacebook = async(req, res) => {

    const userFace = req.params.link;

    var arraySocialFacebook = [`https://www.facebook.com/${userFace}`];

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {

        for (var i = 0; i < arraySocialFacebook.length; i++) {
            await page.goto(arraySocialFacebook[i]);

            var facebookList = await page.evaluate(() => {
                const nodeList = document.querySelectorAll("#content_container ._2pi9 ._4bl9");

                const nodeReferenceList = document.querySelectorAll("._2wmb");
                const nodeArray = [...nodeList];
                const nodeReference = [...nodeReferenceList];

                const refereceList = nodeReference.map(({ innerHTML }) => ({ name: innerHTML }));

                const ImgList = nodeArray.map(({ innerHTML, baseURI }) => ({ like: innerHTML.replace(/\D/g, ""), url: baseURI }));

                const result = JSON.parse(JSON.stringify(ImgList[1]).replace(/<\/?[^>]+(>|$)/g, ""));

                resultList = Object.assign({}, result, { reference: refereceList });

                return resultList;
            });

            // const sql = `INSERT INTO sc_facebook(url_facebook, like_facebook, referencia)VALUES('${facebookList.url}', '${facebookList.like}', '${JSON.stringify(facebookList.reference)}')`;
            // connection.query(sql, (error, results, fields) => {
            //     if (error) {
            //         throw error;
            //     } else {
            //         console.log("Well done", results);
            //     }
            // });

            // console.log(facebookList.reference);

            res.status(200).send({
                status: 200,
                facebook: facebookList,
            });
        }

    } catch (err) {
        res.status(400).send({
            status: 400,
            message: "Error when making request, check the user."
        });
    }

    await browser.close();
};


module.exports = getSocialFacebook;