import React from 'react';
import Fade from 'react-reveal/Fade';

import './About.css';

export default function AboutUs() {
  return (
    <div className="about">
      <section className="wrapper">
        <div className="aside-left">
          <h1>
            Silicon Valley is an American comedy television series created by
            Mike Judge, John Altschuler and Dave Krinsky.
          </h1>
          <p>
            It premiered on HBO on April 6, 2014, running for a total of six
            seasons of 53 episodes.
          </p>
          <p>
            The series finale aired on December 8, 2019. The series, a parody of
            Silicon Valley culture, focuses on Richard Hendricks (Thomas
            Middleditch), a programmer who founds a startup company called Pied
            Piper, and chronicles his struggles trying to maintain his company
            while facing competition from larger entities. Co-stars of the
            series include T.J. Miller, Josh Brener, Martin Starr, Kumail
            Nanjiani, Zach Woods, Amanda Crew, Matt Ross, and Jimmy O. Yang.
            Silicon Valley has received critical acclaim since its airing, with
            praise for its writing and humor. The show has been nominated for
            numerous accolades, including five consecutive Primetime Emmy Award
            nominations for Outstanding Comedy Series.
          </p>
          <p>
            The series finale aired on December 8, 2019. The series, a parody of
            Silicon Valley culture, focuses on Richard Hendricks (Thomas
            Middleditch), a programmer who founds a startup company called Pied
            Piper, and chronicles his struggles trying to maintain his company
            while facing competition from larger entities. Co-stars of the
            series include T.J. Miller, Josh Brener, Martin Starr, Kumail
            Nanjiani, Zach Woods, Amanda Crew, Matt Ross, and Jimmy O. Yang.
            Silicon Valley has received critical acclaim since its airing, with
            praise for its writing and humor. The show has been nominated for
            numerous accolades, including five consecutive Primetime Emmy Award
            nominations for Outstanding Comedy Series.
          </p>
          <p>
            Co-creator and executive producer Mike Judge had worked in a Silicon
            Valley startup early in his career. In 1987, he was a programmer at
            Parallax, a company with about 40 employees. Judge disliked the
            company's culture and his colleagues ("The people I met were like
            Stepford Wives. They were true believers in something and I don't
            know what it was") and quit after less than three months, but the
            experience gave him the background to later create a show about the
            region's people and companies.[7] He recollects also how startup
            companies pitched to him to make a Flash-based animation in the past
            as material for the first episode: "It was one person after another
            going, 'In two years, you will not own a TV set!' I had a meeting
            that was like a gathering of acolytes around a cult leader. 'Has he
            met Bill?' 'Oh, I'm the VP and I only get to see Bill once a month.'
            And then another guy chimed in, 'For 10 minutes, but the 10 minutes
            is amazing!
          </p>
        </div>
        <div className="aside-right">
          <img
            src="https://i.pinimg.com/originals/cc/c7/5a/ccc75a51fcdc7e9bcb0d94d0bebf7949.jpg"
            alt=""
          />
        </div>
      </section>

      <Fade bottom cascade>
        <div className="container">
          <div className="container-item">
            <i class="fas fa-paint-roller fa-5x"></i>
            <h2>Season 1</h2>
            <p>
              Richard Hendricks creates an app known as Pied Piper which
              contains a revolutionary data compression algorithm. Peter Gregory
              acquires a stake in Pied Piper, and Richard hires the residents of
              Erlich Bachman's business incubator including Bertram Gilfoyle and
              Dinesh Chugtai along with Jared Dunn, who defected from another
              tech company called Hooli. Meanwhile, Nelson "Big Head" Bighetti
              chooses to accept a substantial promotion at Hooli instead,
              despite his lack of merit for the job.
            </p>
          </div>
          <div className="container-item">
            <i class="fas fa-code fa-5x"></i>
            <h2>Season 2</h2>
            <p>
              In the immediate aftermath of their TechCrunch Disrupt victory,
              multiple venture capital firms offer to finance Pied Piper's
              Series A round. Peter Gregory has died and is replaced by Laurie
              Bream to run Raviga Capital. Richard finds out that Hooli is suing
              Pied Piper for copyright infringement, claiming that Richard
              developed Pied Piper's compression algorithm on Hooli time using
              company equipment. As a result, Raviga and all the other VC firms
              retract their offer.
            </p>
          </div>
          <div className="container-item">
            <i class="fas fa-bath fa-5x"></i>
            <h2>Season 3</h2>
            <p>
              After a failed stint with Jack Barker as CEO of Pied Piper,
              Richard eventually regains his CEO position. Due to Jack wasting
              all their money on offices and useless marketing, a cash strapped
              Richard hires contract engineers from around the world to help
              construct their application platform. Big Head receives a $20
              million severance package from Hooli in exchange for
              non-disclosure and non-disparagement agreements.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
