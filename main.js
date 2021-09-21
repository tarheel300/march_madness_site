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

const brkt_rslts_2021 = `{"1": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "2": {"seed": 1, "team": "Gonzaga", "score": 70, "winner": false}
                            , "3": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "4": {"seed": 1, "team": "Gonzaga", "score": 93, "winner": true}
                            , "5": {"seed": 1, "team": "Baylor", "score": 78, "winner": true}
                            , "6": {"seed": 11, "team": "UCLA", "score": 90, "winner": false}
                            , "7": {"seed": 2, "team": "Houston", "score": 59, "winner": false}
                            , "8": {"seed": 1, "team": "Gonzaga", "score": 85, "winner": true}
                            , "9": {"seed": 1, "team": "Baylor", "score": 81, "winner": true}
                            , "10": {"seed": 6, "team": "USC", "score": 66, "winner": false}
                            , "11": {"seed": 3, "team": "Arkansas", "score": 72, "winner": false}
                            , "12": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "13": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "14": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}
                            , "15": {"seed": 2, "team": "Houston", "score": 67, "winner": true}

                            , "16": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "17": {"seed": 1, "team": "Gonzaga", "score": 70, "winner": false}
                            , "18": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "19": {"seed": 1, "team": "Gonzaga", "score": 93, "winner": true}
                            , "20": {"seed": 1, "team": "Baylor", "score": 78, "winner": true}
                            , "21": {"seed": 11, "team": "UCLA", "score": 90, "winner": false}
                            , "22": {"seed": 2, "team": "Houston", "score": 59, "winner": false}
                            , "23": {"seed": 1, "team": "Gonzaga", "score": 85, "winner": true}
                            , "24": {"seed": 1, "team": "Baylor", "score": 81, "winner": true}
                            , "25": {"seed": 6, "team": "USC", "score": 66, "winner": false}
                            , "26": {"seed": 3, "team": "Arkansas", "score": 72, "winner": false}
                            , "27": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "28": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "29": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}
                            , "30": {"seed": 2, "team": "Houston", "score": 67, "winner": true}


                            , "31": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "32": {"seed": 1, "team": "Gonzaga", "score": 70, "winner": false}
                            , "33": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "34": {"seed": 1, "team": "Gonzaga", "score": 93, "winner": true}
                            , "35": {"seed": 1, "team": "Baylor", "score": 78, "winner": true}
                            , "36": {"seed": 11, "team": "UCLA", "score": 90, "winner": false}
                            , "37": {"seed": 2, "team": "Houston", "score": 59, "winner": false}
                            , "38": {"seed": 1, "team": "Gonzaga", "score": 85, "winner": true}
                            , "39": {"seed": 1, "team": "Baylor", "score": 81, "winner": true}
                            , "40": {"seed": 6, "team": "USC", "score": 66, "winner": false}
                            , "41": {"seed": 3, "team": "Arkansas", "score": 72, "winner": false}
                            , "42": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "43": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "44": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}
                            , "45": {"seed": 2, "team": "Houston", "score": 67, "winner": true}
                            , "46": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "47": {"seed": 1, "team": "Gonzaga", "score": 70, "winner": false}
                            , "48": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "49": {"seed": 1, "team": "Gonzaga", "score": 93, "winner": true}
                            , "50": {"seed": 1, "team": "Baylor", "score": 78, "winner": true}
                            , "51": {"seed": 11, "team": "UCLA", "score": 90, "winner": false}
                            , "52": {"seed": 2, "team": "Houston", "score": 59, "winner": false}
                            , "53": {"seed": 1, "team": "Gonzaga", "score": 85, "winner": true}
                            , "54": {"seed": 1, "team": "Baylor", "score": 81, "winner": true}
                            , "55": {"seed": 6, "team": "USC", "score": 66, "winner": false}
                            , "56": {"seed": 3, "team": "Arkansas", "score": 72, "winner": false}
                            , "57": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "58": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "59": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}
                            , "60": {"seed": 2, "team": "Houston", "score": 67, "winner": true}
                            , "61": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "62": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "63": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}


                            , "64": {"seed": 1, "team": "Gonzaga", "score": 98, "winner": true}
                            , "66": {"seed": 16, "team": "Norfolk State", "score": 55, "winner": false}
                            , "65": {"seed": 1, "team": "Baylor", "score": 79, "winner": true}

                            , "66": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "67": {"seed": 1, "team": "Gonzaga", "score": 70, "winner": false}
                            , "68": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "69": {"seed": 1, "team": "Gonzaga", "score": 93, "winner": true}
                            , "70": {"seed": 1, "team": "Baylor", "score": 78, "winner": true}
                            , "71": {"seed": 11, "team": "UCLA", "score": 90, "winner": false}
                            , "72": {"seed": 2, "team": "Houston", "score": 59, "winner": false}
                            , "73": {"seed": 1, "team": "Gonzaga", "score": 85, "winner": true}
                            , "74": {"seed": 1, "team": "Baylor", "score": 81, "winner": true}
                            , "75": {"seed": 6, "team": "USC", "score": 66, "winner": false}
                            , "76": {"seed": 3, "team": "Arkansas", "score": 72, "winner": false}
                            , "77": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "78": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "79": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}
                            , "80": {"seed": 2, "team": "Houston", "score": 67, "winner": true}
                            , "81": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "82": {"seed": 1, "team": "Gonzaga", "score": 70, "winner": false}
                            , "83": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "84": {"seed": 1, "team": "Gonzaga", "score": 93, "winner": true}
                            , "85": {"seed": 1, "team": "Baylor", "score": 78, "winner": true}
                            , "86": {"seed": 11, "team": "UCLA", "score": 90, "winner": false}
                            , "87": {"seed": 2, "team": "Houston", "score": 59, "winner": false}
                            , "88": {"seed": 1, "team": "Gonzaga", "score": 85, "winner": true}
                            , "89": {"seed": 1, "team": "Baylor", "score": 81, "winner": true}
                            , "90": {"seed": 6, "team": "USC", "score": 66, "winner": false}
                            , "91": {"seed": 3, "team": "Arkansas", "score": 72, "winner": false}
                            , "92": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "93": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "94": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}
                            , "95": {"seed": 2, "team": "Houston", "score": 67, "winner": true}
                            , "96": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "97": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "98": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}
                            , "99": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "100": {"seed": 1, "team": "Gonzaga", "score": 70, "winner": false}
                            , "101": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "102": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "103": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "104": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "105": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "106": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "107": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "108": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "109": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "110": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "111": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "112": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "113": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "114": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "115": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "116": {"seed": 1, "team": "Baylor", "score": 86, "winner": true}
                            , "117": {"seed": 1, "team": "Gonzaga", "score": 93, "winner": true}
                            , "118": {"seed": 1, "team": "Baylor", "score": 78, "winner": true}
                            , "119": {"seed": 11, "team": "UCLA", "score": 90, "winner": false}
                            , "120": {"seed": 2, "team": "Houston", "score": 59, "winner": false}
                            , "121": {"seed": 1, "team": "Gonzaga", "score": 85, "winner": true}
                            , "122": {"seed": 1, "team": "Baylor", "score": 81, "winner": true}
                            , "123": {"seed": 6, "team": "USC", "score": 66, "winner": false}
                            , "124": {"seed": 3, "team": "Arkansas", "score": 72, "winner": false}
                            , "125": {"seed": 1, "team": "Michigan", "score": 76, "winner": true}
                            , "126": {"seed": 12, "team": "Oregon State", "score": 61, "winner": false}
                            , "127": {"seed": 4, "team": "Florida State", "score": 58, "winner": false}
                        }`;

let brkt_cols_dict = {"r64l": "<div id = \"r64l\" class = \"bracket_column\">"
                    , "r32l": "<div id = \'r32l\' class = \'bracket_column\'>"
                    , "r16l": "<div id = \'r16l\' class = \'bracket_column\'>"
                    , "e8l": "<div id = \'e8l\' class = \'bracket_column\'>"
                    , "f4l": "<div id = \'f4l\' class = \'bracket_column\'>"
                    , "champ": "<div id = \'champ\' class = \'bracket_column\'>"
                    , "f4r": "<div id = \'f4l\' class = \'bracket_column right\'>"
                    , "e8r": "<div id = \'e8l\' class = \'bracket_column right\'>"
                    , "r16r": "<div id = \'r16l\' class = \'bracket_column right\'>"
                    , "r32r": "<div id = \'r32l\' class = \'bracket_column right\'>"
                    , "r64r": "<div id = \'r64l\' class = \'bracket_column right\'>"
                }

function load_json() {

    let seed = null;
    let team = null;
    let score = null;
    let winner = null;
    let game_html = null;
    let winner_class = null;
    let brkt_teams_dict = {};
    let brkt = JSON.parse(brkt_rslts_2021);

    //creating HTML for each of the teams involved, with seed / team / score & if they won
    for (key in brkt) {
        [seed, team, score, winner] = [brkt[key]['seed'], brkt[key]['team'], brkt[key]['score'], brkt[key]['winner']];
        winner_class = (winner === true) ? ' winner' : ''
        game_html = `<p class = "seed${winner_class}">${seed}</p>`
        game_html += `\n<p class = "team${winner_class}">${team}</p>`
        game_html += `\n<p class = "score${winner_class}">${score}</p>`
        brkt_teams_dict[key] = game_html
    }

    let matchup_html = null
    let matchup_nbr = null
    let matchup_dict = {}
    let mod_4 = null
    let mod_2 = null
    for (team_game in brkt_teams_dict) {
        mod_4 = team_game % 4;
        mod_2 = team_game % 2;

        //purposefully leaving out ID 1, will add "Champion" image / call out in future versions
        if(+team_game == 1) {
            continue;
        }
        
        //determining which team_game it would be feeding into & calling that a matchup number
        if (team_game < 4) {
            matchup_nbr = 1;
        } else if (mod_2 == 0)  {
            matchup_nbr = (mod_4 == 2) ? (team_game - 2) / 2 : team_game / 2;
        } else {
            matchup_nbr = (mod_4 == 3) ? (team_game - 1) / 2 : (+team_game + 1) / 2;
        }

        //putting together the matchup HTML, in a dict with the team_game it feeds into as the key
        if (team_game < 4) {
            matchup_nbr = 1;
        } else if (mod_4 <= 1)  {
            matchup_html = "<div class = matchup>\n";
            matchup_html += brkt_teams_dict[team_game];
            matchup_dict[matchup_nbr] = matchup_html;
        } else {
            matchup_html = `\n`;
            matchup_html += brkt_teams_dict[team_game];
            matchup_html += `\n</div>`;
            matchup_dict[matchup_nbr] = matchup_dict[matchup_nbr] + matchup_html; 
        }

    }

    let col_key = '';
    for (match in matchup_dict) {
        mod_2 = match % 2;
        if (+match == 1) {
            col_key = 'champ'
        } else if (+match < 4) {
            col_key = 'f4'
        } else if (+match < 8) {
            col_key = 'e8'
        } else if (+match < 16) {
            col_key = 's16'
        } else if (+match < 32) {
            col_key = 'r32'
        } else if (+match < 64) {
            col_key = 'r64'
        } ;
        col_key = col_key + ((mod_2 == 0) ? 'l' : 'r');

        brkt_cols_dict[col_key] = brkt_cols_dict[col_key] + "\n" + matchup_dict[match];
    }

    //close out the div on each column, add the column into the bracket.
    for (col in brkt_cols_dict) {
        brkt_cols_dict[col_key] = brkt_cols_dict[col_key] + "\n</div>"
        document.getElementById("bracket_js").innerHTML += brkt_cols_dict[col];
    }

    //document.getElementById("bracket_js").innerHTML += matchup_dict[2];
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

//$(document).ready() //learned this is specifically for jQuery - more to come later.