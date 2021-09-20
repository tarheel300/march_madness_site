console.log("I'm Running.");
/*
let test_me = () => alert("I kicked off! Arrow!");

let my_first_obj = new Object();

my_first_obj['name'] = 'Object Name';
my_first_obj['attrib'] = 'Something';

alert(my_first_obj.name)
*/
/*
function my_first_function() {
    alert("Go Heels!")
}
*/

const brkt_rslts_2021 = `{"64": {"seed": 1, "team": "Gonzaga", "score": 98, "winner": true}
                            , "66": {"seed": 16, "team": "Norfolk State", "score": 55, "winner": false}
                            , "65": {"seed": 1, "team": "Baylor", "score": 79, "winner": true}
                            , "1": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "3": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "2": {"seed": 1, "team": "Gonzaga", "score": 70, "winner": false}
                            , "4": {"seed": 1, "team": "Gonzaga", "score": 93, "winner": true}
                            , "5": {"seed": 1, "team": "Baylor", "score": 78, "winner": true}
                            , "6": {"seed": 11, "team": "UCLA", "score": 90, "winner": false}
                            , "7": {"seed": 2, "team": "Houston", "score": 59, "winner": false}
                        }`;

function load_json() {
    /*
    let brkt_rslts = JSON.parse(brkt_rslts_2021);
    let para = document.createElement("p");
    para.classList.add('seed');
    para.appendChild(document.createTextNode(brkt_rslts.t64['seed']));
    document.getElementById("add_here").appendChild(para);

    para = document.createElement("p");
    para.classList.add('team');
    para.appendChild(document.createTextNode(brkt_rslts.t64['team']));
    document.getElementById("add_here").appendChild(para);
    
    para = document.createElement("p");
    para.classList.add('score');
    console.log(para.classList)
    para.appendChild(document.createTextNode(brkt_rslts.t64['score']));
    para.classList.add()
    document.getElementById("add_here").appendChild(para);
    */

    let winner = null
    let brkt = JSON.parse(brkt_rslts_2021);
    for (key in brkt) {
        console.log(key);
        winner = brkt[key]['winner'];
        console.log(winner);
    }
}

function display_cur_ts() {
    var current_time = new Date();
    var current_year = current_time.getFullYear();
    var current_month = ("0" + (current_time.getMonth() + 1)).slice(-2);
    var current_date = ("0" + (current_time.getDate() + 1)).slice(-2);;
    document.getElementById('cur_ts').innerHTML = "Current Date: " + current_year + "-" + current_month + "-" + current_date;
}

function select_winner(dest_id) {
    console.log("Hello!");
    //get ID of the input clicked
    //check if the destination already has text
    dest_id_content = document.getElementById(dest_id).innerHTML;
    console.log(dest_id_content)
    console.log(dest_id_content.length)

    if (dest_id_content.length == 0) {
        console.log("I'm Zero.")
    }
    //update the css classes of the input clicked (seed / name / score)
    //get ID of the next round where the winner would go
    //Add Seed Number
    //Add Team Name
    //Add Score
    var para = document.createElement("P");                       // Create a <p> node
    var t = document.createTextNode("This is a paragraph.");      // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    document.getElementById(dest_id).appendChild(para);
    //document.getElementById(dest_id).appendChild(p);
}

//$(document).ready()