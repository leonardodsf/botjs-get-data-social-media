'use strict';

const puppeteer = require('puppeteer');
const connection = require('../database/db');


const getSocialInstagram = async (req, res) => {

    const userInsta = req.params.link;

    var arraySocialInstagram = [`https://www.instagram.com/${userInsta}`];

    const browser = await puppeteer.launch();
    const page = await browser.newPage();


    try {
        for (var i = 0; i < arraySocialInstagram.length; i++) {
            await page.goto(arraySocialInstagram[i]);
            var instagramList = await page.evaluate(() => {
                const nodeLike = document.querySelectorAll("a span.g47SY");
                const nodeList = document.querySelectorAll('article img');
                const nodeName = document.querySelectorAll('.zwlfE .nZSzR h2');
                const url = window.location.href;

                const nameArray = [...nodeName];
                const nodeArray = [...nodeList];
                const listLikeArray = [...nodeLike];

                var LikeList = listLikeArray.map(({ title }) => ({ followers: title }));
                const ImgList = nodeArray.map(({ src }) => ({ src }));
                const nameReference = nameArray.map(({ innerHTML }) => ({ name: innerHTML }));

                let result = Object.assign({ image: ImgList.slice(0, 6) }, LikeList[1], nameReference[0]);

                result = { ...result, url: url };

                return result;
            });

            // const sql = `INSERT INTO sc_instagram(url_instagram, like_instagram, imagem_instagram, referencia)VALUES('${instagramList.url}', '${instagramList.like_insta}', '${JSON.stringify(instagramList.image)}', '${instagramList.name}')`;
            // connection.query(sql, (error, results, fields) => {
            //     if (error) {
            //         throw error;
            //     } else {
            //         console.log("Well done", results);
            //     }
            // });

            // console.log(instagramList);

            res.status(200).send({
                status: 200,
                instagram: instagramList,
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

module.exports = getSocialInstagram;