const express = require("express");
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
const fs = require('fs');
const cors = require('cors')

require('dotenv').config();
app.use(cors({origin: process.env.FRONT_APP_BASEURL}));

// GenderAPI
const GenderApi = require('gender-api.com-client');
const genderApiClient = new GenderApi.Client(process.env.API_KEY);

app.listen(process.env.PORT, () => {
    console.log("Server listen to " + process.env.PORT);
    db.serialize(() => {
        db.run('CREATE TABLE people (personId INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT NOT NULL)');
        const addPeople = db.prepare('INSERT INTO people (firstName) VALUES (?)');

        fs.readFile("./names.txt", {encoding: "utf-8"}, (err, data) => {
            if (err) throw err;
            const names = data.toString().split("\n");
            for (let i = 0; i < names.length; i++) {
                let firstName = names[i].split(" ")[0];
                if (firstName) {
                    addPeople.run(firstName) 
                }
            }
            addPeople.finalize();
        });
    })
});

async function getDBRows(query) {
    return new Promise((resolve, reject) => {
        db.each(query, (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })
}

async function getGender(firstName) {
    if (firstName === "Amandine") {
        return "woman"
    } else {
        return "man";
    }
    // return new Promise((resolve, reject) => {
    //     try {
    //         genderApiClient.getByFirstName(firstName, (res) => {
    //             resolve(res)
    //         })
    //     } catch(err) {
    //         reject(err);
    //     }
    // });
}

async function RandomFirstName() {
    let max = 2 //400;
    let randomNumber =  Math.floor(Math.random() * (max)) + 1;
    let firstNamePromise = await getDBRows('SELECT firstName FROM people WHERE personId = ' + randomNumber);
    return firstNamePromise.firstName;
}

app.get("/getRandomFirstName", async (req, res) => {
    let firstName = await RandomFirstName();
    let gender = await getGender(firstName);
    res.status(200).json({gender, firstName});
});