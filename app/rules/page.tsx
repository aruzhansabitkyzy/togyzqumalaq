import "/public/css/about.css";
import Image from "next/image";
const Rules = () => {
  return (
    <div className="rules bg-light3 dark:bg-dark3">
      <div className="container">
        <h1 className="rules__title"> Rules</h1>
        <div className="rules__cont">
          <div className="description">
            <p>
              The togyzkumalak game is played between two people on a special
              board.The game board-2 Qazan(saves all the balls earned), 18
              Otau(little boxes), consists of 162 Qumalaqs(balls). At the
              beginning of the game, each player owns one Qazan, eighty-one
              qumalaq, built from nine to nine.The player who made the first
              move is called the Bastaushy, the player who made the return move
              is called the Kostaushy.The general design of the board is shown
              on the right:
            </p>
            <Image src={"/images/board.png"} alt="" width={800} height={500} />
          </div>
          <div className="game_rules">
            <p>The moves alternate on the part of the players.</p>
            <br />
            <p>
              In order to make one move you choose one otau and you take all
              qumalaqs from inside and distribute it one by one to each otau
              leaving one qumalaq for them including the current(chosen) otau.
              In case of excess of qumalaqs, we distribute it the same way on
              the opponent's side from left to right. If the last qumalaq lays
              on the otau which has odd-numbered qumalaq and thus makes it an
              even-numbered otau then the whole qumalaq on that otau is earned
              and stored on your Qazan.
              <br />
              !!You can earn from the opponent's otau. If the last qumalaq gets
              to one of your Otaus then you cannot earn anything
            </p>
            <Image
              src={"/images/example.png"}
              alt=""
              width={800}
              height={500}
            />
            <br />
            <h3 className="sub_rule  text-light2 dark:text-dark2">Tuzdyq</h3>
            <p>
              Tuzdyq differs in color, it has only one red qumalaq in it.
              <br />
              Tuzdyq is like a conquered Otau which will serve you to earn
              score. It means that you can take over your opponent's Otau and
              make it yours. Thus, every time the qumalaqs passed by your
              CONQUERED Otau, that one qumalaq that should lay on the Otau, will
              be moved to you Qazan. If the last qumalaq lays on the Otau and
              adds up 3 qumalaqs, then you can earn Tuzdyq.
              <br />
              <b>Rules:</b> You can't earn Tuzdyq on 9th Qazan. Also, if your
              opponent has a Tuzdyq on your side on 5th otau, you are not
              allowed to get Tuzdyq on the same numbered Otau
              <Image
              src={"/images/tuzdyq.png"}
              alt=""
              width={800}
              height={500}
            />
            </p>
            <br />
            <h3 className="sub_rule  text-light2 dark:text-dark2">Atsyrau</h3>
            <p>
              When your opponent is run out of qumalaq, that's the time to
              activate Atsyrau. 
              <br />
              <b>Rules</b>: The first thing to do, when your opponent
              has no qumalaq, is to make one move. And then if your opponents
              still don't have any qumalaq(after distribution) then you can take
              all the qumalaqs from all Otaus and put it into your Qazandyq.
            </p>
            <br />
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rules;
