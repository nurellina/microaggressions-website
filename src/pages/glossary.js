import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/glossary-styles.css"
import greenRight from "../images/glossary-imgs/greenRight.svg"
import greenLeft from "../images/glossary-imgs/greenLeft.svg"
import pinkBgShape from "../images/glossary-imgs/pinkBgShape.svg"
import pinkBgShape2 from "../images/glossary-imgs/pinkBgShape2.svg"
import lilacBgShape from "../images/glossary-imgs/lilacBgShape.svg"
import blackBgShape from "../images/glossary-imgs/blackBgShape.svg"
import blackBgShape2 from "../images/glossary-imgs/blackBgShape2.svg"



const GlossaryPage = () => (

  <Layout>
    <SEO title="Glossary" />
    <body>
      <section>
        <article>
          <div className="container glossary">


            {/* Title */}
            <div id="title">
              <h1 className="glossaryTitle-outline"> Glossary</h1>
              <h1 className="glossaryTitle-outline"> Glossary</h1>
              <h1 className="glossaryTitle"> Glossary</h1>
            </div>
            {/* Intro */}
            <p className="intro">
              Microaggressions do not exist in a vacuum, they are part of a bigger picture that spans a wide spectrum of oppressive power dynamics and structures.
            <br />
              <br /> Here's a selection of terms and subjects that we consider important to know about if you want to understand how Microaggressions work and how they are made possible
            </p>

            <div id="terms">

              {/* Ally */}
              <div className="glossary-entry">
                <img src={greenRight} className="greenRightDiffh" alt="Green Shad on the right" />
                <div id="ally"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">

                  <h3>
                    Ally • [ˈæl.aɪ]
                  </h3>
                  <p>Someone who makes the commitment and effort to recognize their privilege (based on gender, class, race, sexual identity, etc.) and work in solidarity with oppressed groups in the struggle for justice. Allies understand that it is in their own interest to end all forms of oppression, even those from which they may benefit in concrete ways.</p>
                  <p>Allies commit to reducing their own complicity or collusion in oppression of those groups and invest in strengthening their own knowledge and awareness of oppression.</p>
                </div>
              </div>

              {/* Color Blindness */}
              <div className="glossary-entry right">
                <img src={greenLeft} className="greenLeftDiffh" alt="Green Shad on the left" />
                <div id="color-blindness"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">
                  <h3>
                    Color Blindness
                </h3>
                  <p className="p-right"> Social changes did not eliminate racism and racial inequality, even if they made important progress. But, if racism is no longer overt in many situations yet still exists, what should we call it? </p>
                  <p className="p-right">One concept which scholars call colorblind racism, is the belief that racism is no longer a problem and that we all have equal opportunities. People who subscribe to colorblind explanations claim they do not see the color of people's skin and believe everyone to be equal. </p>
                  <p className="p-right">Colorblindness prevents us from seeing the historical causes of racial inequality and how racial inequality persists in our society. </p>
                </div>
              </div>

              {/* Cultural Appropritation*/}
              <div className="glossary-entry">
                <div id="cult-approp"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">
                  <h3>
                    Cultural Appropritation
                </h3>
                  <p>Refers to the theft of cultural elements of a non-dominant culture for one’s own use, or profit — including art, language, clothing, etc. — often without understanding, acknowledgement, or respect for its original meaning. It is a result from the assumption of a dominant (i.e. white) culture’s right to take other cultural elements. </p>
                  <p>It is necessary to learn about the context in which cultural appropriation happens. A person of color might be discriminated against because of a hairstyle that relates to their culture, while you as part of the dominant group can get away with appropriating that same hairstyle, making it trendy, and never understanding the experiences that contributed to the invention of the hairstyle in the first place.</p>
                  <p></p>
                </div>
              </div>

              {/* Cultural Racism*/}
              <div className="glossary-entry right">
              <img src={blackBgShape} className="blackBgShape-first" alt="black shad as a background" />

                <div id="cult-racism"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">

                  <h3>
                    Cultural Racism
                </h3>
                  <p>Cultural racism refers to representations, messages and stories conveying the idea that behaviors and values associated with white people or “whiteness” are automatically “better” or more “normal” than those associated with other racially defined groups. </p>
                  <p>This form of racism is reproduced on a structural level in advertising, movies, history books, and on an institutional level by the means of policies and laws. Cultural racism maintains the collective belief about what is considered appropriate behaviour or what is seen as beautiful.</p>
                </div>
              </div>

              {/* Gaslighting */}
              <div className="glossary-entry">
                <div id="lilac-background"> </div>
                <img src={lilacBgShape} className="lilacBgShape" alt="Lilac shad as a background" />
                <img src={lilacBgShape} className="lilacBgShape-bottom" alt="Lilac shad as a background" />
                <p className="p-quote quote-gaslighting glitch">Are you sure<div className="filled">that’s</div>  what it was about? </p>
                <div id="gaslighting"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">
                  <h3>
                    Gaslighting • [ˈɡæslaɪtɪŋ]
                </h3>

                  <p> is defined as <b>manipulative behaviour and a form of emotional abuse</b>, that makes a person question their own memory, judgement or perception. In terms of racism, gaslighting is used to derail accusations of racist behaviour and shift the focus back onto the person who addressed it.</p>
                  <p> A classic example of racial gaslighting is where a person of colour describes a racist interaction, only to have it immediately questioned: </p>
                  <p>‘Was it definitely about skin colour though?’</p>
                  <p>‘But I don’t think that was about racism.’</p>
                  <p> All of these responses undermine the lived experience of racism that the person of colour has just described. The purpose of these questions is to make the person who has experienced racism second-guess what they remember and how they interpreted the events – which is gaslighting.</p>
                </div>
              </div>

              {/* Implicit Bias */}
              <div className="glossary-entry right">
                <img src={pinkBgShape2} className="pinkBgShape-second" alt="pink shad as a background" />

                <div id="pink-background"> </div>
                <img src={pinkBgShape} className="pinkBgShape" alt="pink shad as a background" />
                <img src={pinkBgShape} className="pinkBgShape-first" alt="pink shad as a background" />


                <p className="p-quote quote-implicit-bias">
                  Intent vs.<div className="flicker">Impact</div>
                </p>
                <div id="implicit-bias"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">
                  <h3>
                    Implicit Bias
                </h3>
                  <p> are associations, assumptions, and expectations that we hold about certain groups of people without even necessarily being aware of it. The implicit associations we hold do not necessarily align with the beliefs we think we have. </p>
                  <p>For example: Most people would say that they don't agree with the discrimination of people of color, yet many studies have indicated that the bias is subconsciously affecting our attitudes and actions. This might then result in an unfair treatment of a person of color when it comes to the housing market.</p>
                  <p>Implicit biases can take various forms. Among those is the affinity bias, which is the tendency to connect with others who share similar interests, experiences, and backgrounds. This tendency in itself is not necessarily problematic, but it becomes so when it leads to the exclusion of 'others'.  </p>
                </div>
              </div>

              {/* Othering */}
              <div className="glossary-entry">
                <div id="othering"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">
                  <h3 className="h3">
                    Othering • [ʌðəɹɪŋ]
              </h3>
                  <p>Othering is a phenomenon in which some individuals or groups are defined and labeled as not fitting in within the norms of a social group. It is an effect that influences how people perceive and treat those who are viewed as being part of the in-group versus those who are seen as being part of the out-group.</p>
                  <p>It is an “us vs. them” way of thinking about human connections and relationships. This process essentially involves looking at others and saying "they are not like me" or "they are not one of us."</p>
                  <p>Othering is a way of negating another person's individual humanity and, consequently, those that are have been othered are seen as less worthy of dignity and respect.</p>
                </div>
              </div>

              {/* Oppression */}
              <div className="glossary-entry right">
                <img src={greenLeft} className="greenLeftDiff-second" alt="Green Shad on the left" />
                <div id="oppression"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">
                  <h3>
                    Oppression • [əˈpɹɛʃən]
                </h3>
                  <p> Oppression occurs when one group has more access to power and privilege than another group, and when that power and privilege is used to maintain the status quo (i.e., domination of one group over another). </p>
                  <p> Thus, oppression is both a state and a process, with the state of oppression being unequal group access to power and privilege, and the process of oppression being the ways in which inequality between groups is maintained. </p>
                  <p> Oppression, therefore, results in the differentiation of people into groups (e.g., dominant/dominated, powerful/powerless, superior/inferior, oppressor/oppressed), and group membership determines the degree to which an individual has power or the opportunity and ability to access resources. </p>
                  <p> Differentiating people into groups can be done in many ways (e.g., race, sex, sexual orientation, abilities) and, thus, oppression based on group membership also comes in various forms (e.g., racism, sexism, heterosexism, ableism). Oppression can also occur at the institutional or systemic levels, such as with laws, policies, and “normative” practices that marginalize and inferiorize groups of people. </p>
                </div>
              </div>

              {/* Tone Policing */}
              <div className="glossary-entry">
                <img src={blackBgShape2} className="blackBgShape-second" alt="black shad as a background" />

                <p className="p-quote quote-tone-policing glitch">You don't need to get so<div className="filled"> angry</div> </p>
                <div id="tone-policing"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">
                  <h3>
                    Tone Policing
                </h3>
                  <p> Tone policing is when someone tries to diminish the validity and importance of a statement by attacking the tone in which it is said and presented, instead of the message itself. </p>
                  <p> This diversionary tactic is used everywhere — households, educational institutions, workplaces and most significantly in cultures of protests by people high up on the “privilege ladder”. </p>
                  <p> It is yet another tool used to protect privilege instead of understanding the structures of oppression that exist in our society. Naming something and knowing what it is, is the first step towards fighting it.</p>
                </div>
              </div>

              {/* White Privilege */}
              <div className="glossary-entry right">
                <div id="white-privilege"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease">
                  <h3>
                    White Privilege
                </h3>
                  <p> White privilege, or white skin privilege, is the societal privilege that benefits white people over non-white people in some societies, particularly if they are otherwise under the same social, political, or economic circumstances. </p>
                  <p> With roots in European colonialism and imperialism, and the Atlantic slave trade, white privilege has developed in circumstances that have broadly sought to protect white racial privileges, various national citizenships and other rights or special benefits.</p>
                </div>
              </div>
            </div>

            <div className="page-header"></div>
          </div>
        </article>
      </section>
    </body>
  </Layout >
)



export default GlossaryPage
