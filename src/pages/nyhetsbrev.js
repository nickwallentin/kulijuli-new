import { Grid, Section, Wrap } from "../components/styled"

import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"

const NyhetsbrevPage = () => {
  return (
    <Layout>
      <SEO title="Nyhetsbrev" />
      <Section>
        <Wrap>
          <Grid>
            <div>
              <h1>Nyhetsbrev</h1>
              <p>
                Genom att gå med i Kulijulis nyhetsbrev så kommer du alltid att
                ha koll på den senaste från Kulijuli. Bli bland dem första som
                får veta när biljetter till sommarens höjdpunkt släpps, senaste
                nyheterna och när nya avsnitt av Kulijulipodden släpps.
              </p>
              <strong>Detta får du</strong>
              <ul style={{ marginTop: "1rem" }}>
                <li style={{ marginBottom: "0.2rem" }}>Fördel 1</li>
                <li style={{ marginBottom: "0.2rem" }}>Fördel 2</li>
                <li style={{ marginBottom: "0.2rem" }}>Fördel 3</li>
              </ul>
            </div>
            <SignUp>
              <h3>Fyll i din epost</h3>
              <p>
                För att prenumerera fyller du bara i din epostadress och klickar
                sedan på knappen "Prenumerera".
              </p>
              <div id="mc_embed_signup">
                <form
                  action="https://kulijuli.us7.list-manage.com/subscribe/post?u=f30971668a59b3e6e9380dc17&amp;id=3bf1ac314f"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group">
                      <input
                        type="email"
                        name="EMAIL"
                        class="required email"
                        id="mce-EMAIL"
                        placeholder="Epostadress"
                      />
                    </div>
                    <div id="mce-responses" class="clear">
                      <div
                        class="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        class="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_f30971668a59b3e6e9380dc17_3bf1ac314f"
                        tabIndex="-1"
                        value=""
                      />
                    </div>
                    <div class="clear">
                      <input
                        type="submit"
                        value="Prenumerera"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="button"
                        style={{ cursor: "pointer" }}
                      />
                      <small
                        style={{
                          marginTop: "1rem",
                          display: "block",
                          lineHeight: "1rem",
                          marginBottom: "0rem",
                        }}
                      >
                        Din epost används enbart till vårt nyhetsbrev och vi
                        skickar endast ut mail som gäller Kulijuli. Du kan när
                        som helst avsluta din prenumereration på nyhetsbrevet.
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            </SignUp>
          </Grid>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default NyhetsbrevPage

const SignUp = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 4px;
  input {
    width: 100%;
    border: none;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #d8d8d8;
    font-size: 1rem;
    &[type="submit"] {
      background: var(--c-pri);
      color: white;
      margin-top: 1rem;
      border: none;

      font-weight: 700;
    }
  }
`
