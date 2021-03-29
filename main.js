console.log("I'm Running.");

data = [{"matchup": 4, "seed" : 1, "team_nm" : "North Carolina", "rgn_nm" : "main"}
, {"matchup": 7, "seed" : 2, "team_nm" : "Virginia", "rgn_nm" : "main"}
, {"matchup": 6, "seed" : 3, "team_nm" : "Florida State", "rgn_nm" : "main"}
, {"matchup": 5, "seed" : 4, "team_nm" : "North Carolina State", "rgn_nm" : "main"}
, {"matchup": 5, "seed" : 5, "team_nm" : "Virginia Tech", "rgn_nm" : "main"}
, {"matchup": 6, "seed" : 6, "team_nm" : "Pittsburgh", "rgn_nm" : "main"}
, {"matchup": 7, "seed" : 7, "team_nm" : "Boston College", "rgn_nm" : "main"}
, {"matchup": 4, "seed" : 8, "team_nm" : "Duke", "rgn_nm" : "main"}
]

matchup_order = [4, 2, 1, 5, 6, 3, 7]

function my_first_function() {
    alert("Go Heels!")
}

function display_cur_ts() {
    var current_time = new Date();
    var current_year = current_time.getFullYear();
    var current_month = ("0" + (current_time.getMonth() + 1)).slice(-2);
    var current_date = ("0" + (current_time.getDate() + 1)).slice(-2);;
    document.getElementById('cur_ts').innerHTML = "Current Date: " + current_year + "-" + current_month + "-" + current_date;
}

function crt_bracket () {
    //console.log(_.keys(_.countBy(data, function(data) { return data.name; })));
    console.log(data.length);
    //figure out how to run the matchups in the right order
    //for now using scrappy way of hard-coding
    var matchup_cnt = matchup_order.length
    matchup_order.forEach(
        function (item, index, array) {
            console.log(item, index, array);
            if (item >= matchup_cnt / 2) {
                console.log('Yes')
            }
            else {
                console.log('No')
            }
            data.forEach(
                function (row, idx, row_data) {
                    console.log(row, idx, row_data);
                }
            )
        }
    )
    for (i = 0; i < matchup_order.length; i++) {
        console.log('Test Here');


    }
    //for (const [key, value] of Object.entries(data)) {
    //    console.log(value['matchup']);
    //    console.log(key);
    //    console.log(key, value);
    //}
}

function select_winner(dest_id) {
    console.log("Hello!");
    //get ID of the input clicked
    //check if the destination already has text
    dest_id_content = document.getElementById(dest_id).innerHTML;
    console.log(dest_id_content)
    console.log(dest_id_content.length)

    if (dest_id_content.length > 0) {
        console.log("I'm Not Zero.")
        document.getElementById(dest_id).innerHTML = ''
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

function on_load() {
    display_cur_ts();
    crt_bracket();
}

$(document).ready(on_load())