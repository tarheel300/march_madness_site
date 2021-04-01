console.log("I'm Running.");

data = [{"matchup": 4, "seed" : 1, "team_pos": "top", "team_nm" : "North Carolina", "rgn_nm" : "main"}
, {"matchup": 7, "seed" : 2, "team_pos": "bot", "team_nm" : "Virginia", "rgn_nm" : "main"}
, {"matchup": 6, "seed" : 3, "team_pos": "top", "team_nm" : "Florida State", "rgn_nm" : "main"}
, {"matchup": 5, "seed" : 4, "team_pos": "top", "team_nm" : "North Carolina State", "rgn_nm" : "main"}
, {"matchup": 5, "seed" : 5, "team_pos": "bot", "team_nm" : "Virginia Tech", "rgn_nm" : "main"}
, {"matchup": 6, "seed" : 6, "team_pos": "bot", "team_nm" : "Pittsburgh", "rgn_nm" : "main"}
, {"matchup": 7, "seed" : 7, "team_pos": "top", "team_nm" : "Boston College", "rgn_nm" : "main"}
, {"matchup": 4, "seed" : 8, "team_pos": "bot", "team_nm" : "Duke", "rgn_nm" : "main"}
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

function crt_bracket_col() {
    var bracket_col_html = ''
    var bracket_col_2_html = ''
    var bracket_col_3_html = ''

    //var rd_nbr = 1 //figure out how to make dynamic
    //var my_data = data //does not truly copy the data, need to figure that out
    var matchup_cnt = data.length

    
    for (i = 1; i < matchup_cnt; i++) {
        if (i>= 4){
            console.log(i)
            cur_match = [[], []]
            data.forEach(
                function (row, idx, row_data) {
                    //console.log(i, row);
                    if (i == row['matchup']) {
                        if (row['team_pos'] == 'bot') {
                            //console.log('Here');
                            cur_match[1].push(row['matchup'], row['seed'], row['team_nm'])
                        }
                        else {
                            //console.log('There');
                            cur_match[0].push(row['matchup'], row['seed'], row['team_nm'])
                        }
                    }
                }
            )
            console.log(cur_match[0], cur_match[1]);
            bracket_col_html += '<div class = "r1">'
            bracket_col_html += '   <div class = "matchup" id = "' + cur_match[0][0] + '">'
            bracket_col_html += '       <div class = "team" id = "' + cur_match[0][0] + 'Top">'
            bracket_col_html += '           <div class = "seed"> ' + cur_match[0][1] + ' </div>'
            //need parent id here......
            bracket_col_html += '           <input type = "text" class = "team-name" onclick="select_winner(2)" value = "' + cur_match[0][2] + ' " readonly>'
            bracket_col_html += '       </div>'
    
            bracket_col_html += '       <div class = "team" id = "' + cur_match[1][0] + 'Bot">'
            bracket_col_html += '           <div class = "seed"> ' + cur_match[1][1] + ' </div>'
            //need parent id here......
            bracket_col_html += '           <input type = "text" class = "team-name" onclick="select_winner(2)" value = "' + cur_match[1][2] + ' " readonly>'
            bracket_col_html += '       </div>'
            bracket_col_html += '    </div>' //close the matchup
            bracket_col_html += '</div>' //close the round 
        }
        else {
            var rd_nbr = 2
            if (i == 1) {
                rd_nbr = 3
                bracket_col_3_html += '<div class = "r' + rd_nbr + '">'
                bracket_col_3_html += '    <div class = "matchup" id = "' + i + '">'
                bracket_col_3_html += '        <div class = "team" id = "' + i + 'Top"></div>'
                bracket_col_3_html += '        <div class = "team" id = "' + i + 'Bot"></div>'
                bracket_col_3_html += '   </div>' //close the matchup
                bracket_col_3_html += '</div>' //close the round
                console.log(bracket_col_3_html);
            } else {
                bracket_col_2_html += '<div class = "r' + rd_nbr + '">'
                bracket_col_2_html += '    <div class = "matchup" id = "' + i + '">'
                bracket_col_2_html += '        <div class = "team" id = "' + i + 'Top"></div>'
                bracket_col_2_html += '        <div class = "team" id = "' + i + 'Bot"></div>'
                bracket_col_2_html += '   </div>' //close the matchup
                bracket_col_2_html += '</div>' //close the round
                console.log(bracket_col_2_html);
            }

        }
    }
    //console.log(bracket_col_html);
    document.getElementById("bracket").innerHTML += bracket_col_html;
    document.getElementById("bracket").innerHTML += bracket_col_2_html;
    document.getElementById("bracket").innerHTML += bracket_col_3_html;
}

function select_winner(dest_id) {
    //console.log("Hello!");
    //get ID of the input clicked
    //check if the destination already has text
    dest_id_content = document.getElementById(dest_id).innerHTML;
    console.log(dest_id_content)
    console.log(dest_id_content.length)

    if (dest_id_content.length > 0) {
        //console.log("I'm Not Zero.")
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
    crt_bracket_col();
}

$(document).ready(on_load())