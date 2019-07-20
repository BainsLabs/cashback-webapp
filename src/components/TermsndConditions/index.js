/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { termsHeading } from 'constants/termsHeading';

export default () => (
  <div className="terms-conditions">
    <h2 className="terms-conditions__heading">6Degrees.CASH Terms of Use</h2>
    <Container>
      <Row>
        <Col md={4}>
          <div className="terms-conditions__heading-box">
            <ul>
              {termsHeading.map(item => (
                <li>
                  <a data-scroll href={`#${item.key}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md={8}>
          <a name="introduction"><h5>INTRODUCTION</h5></a>
          <p>
            These Terms of Use were last updated on: July 17, 2019. 6Degrees.CASH, an Ontario
            limited liability company (together with any affiliates, “we“, “us“, “our” and the
            “Company“) owns and operates one or more websites, mobile apps, and interactive
            services, under the brand 6Degrees.CASH.com or associated brands (collectively, the
            “6Degrees.CASH Site“). These Terms of Use (“Terms“) apply to the 6Degrees.CASH Site and
            to all of the features, mobile applications, emails, online services and other
            functionalities (collectively, the “Features“) available via or related to the
            6Degrees.CASH Site, whether accessed via a computer, mobile device, or otherwise
            (collectively, the “6Degrees.CASH Site and Features“).  These Terms of Use may also
            apply to future websites, mobile apps, and interactive services operated by the Company,
            whether or not associated with the 6Degrees.CASH brand. These Terms are a legal
            agreement between you and the Company. By using any of the 6Degrees.CASH Site and
            Features or our Services (defined below), and/or clicking to “Accept” or otherwise
            agreeing to these Terms where that option is made available to you, you agree to be
            bound by these Terms as well as our Privacy Policy (www.6Degrees.com/privacy). If you do
            not agree to these Terms or our Privacy Policy, please do not register with or use any
            6Degrees.CASH Site or Features or our Services. We may post additional terms, official
            rules, or agreements that apply to certain services, applications, activities, and
            features we offer or provide at or through the 6Degrees.CASH Site and Features
            (“Additional Terms“), and you may be subject to such Additional Terms when you access
            those services, applications, activities and/or features. In the event of any conflict
            between the terms of the Additional Terms and these Terms, these Terms shall prevail
            unless expressly otherwise stated in the Additional Terms, which are intended to
            supplement, but not replace, these Terms. Please contact us with any questions regarding
            these Terms or any Additional Terms. You can reach us by using the “Contact Us”, or by
            email at info@6Degrees.CASH.
          </p>
          <a name="uses"><h5>Use of 6Degrees.CASH Site and Features</h5></a>
          <p>
            You agree to use the 6Degrees.CASH Site and Features and the services available on or
            through the 6Degrees.CASH Site and Features (the “Services“) only for purposes that are
            permitted by these Terms, any Additional Terms, and any applicable law, regulation or
            generally accepted practices in the relevant jurisdictions. Subject to all of the
            provisions of these Terms, the Company hereby grants you a limited, terminable,
            non-transferable, personal, non-exclusive licence to access and use the 6Degrees.CASH
            Site and Features and our Services solely as provided herein. You may download material
            displayed on the 6Degrees.CASH Site and Features for non-commercial, personal use only,
            provided you do not remove any copyright and other proprietary notices contained on the
            materials. You may not, however, distribute, modify, broadcast, publicly perform,
            transmit, reuse, re-post, or use the content of the 6Degrees.CASH Site and Features,
            including any text, images, audio, and video, for public or commercial purposes without
            the Company’s prior written permission. Notwithstanding anything to the contrary herein,
            all rights not specifically granted in the licence set forth above shall be reserved and
            remain always with the Company. Your right to use the 6Degrees.CASH Site and Features
            and our Services is not transferable. You acquire no rights or licences in or to the
            6Degrees.CASH Site and Features and materials contained therein other than the limited
            right to access and utilize the 6Degrees.CASH Site and Features and our Services in
            accordance with these Terms. If you are accessing the 6Degrees.CASH Site and Features
            via any of our applications available via third parties (collectively “Third Party
            Outlets“) including, without limitation, Apple, Inc.’s “App Store” or Google, Inc.’s
            “Google Play” store, you acknowledge and agree that these Terms are entered into by and
            between you and the Company only, and that none of the Third Party Outlets are party to
            these Terms. The Third Party Outlets are not sponsors to, nor in any way affiliated
            with, any of the Company’s Promotions (defined below), nor any of our Services or the
            6Degrees.CASH Site and Features.
          </p>
          <a name="representations"><h5>User Representations and Warranties</h5></a>
          <p>
            By using the 6Degrees.CASH Site and Features or our Services, you represent and warrant
            that you: (i) have the power and authority to enter into and be bound by these Terms;
            (ii) shall use the 6Degrees.CASH Site and Features and our Services only as permitted by
            these Terms, and any applicable Additional Terms, and not for any unlawful purpose; and
            (iii) are eighteen (18) years of age or older (or any older age legally required under
            local law to bind yourself legally to these Terms). If you are under the age of 18 (or
            any older age legally required under local law to bind yourself legally to these Terms),
            you are not allowed to use the 6Degrees.CASH Site and Features nor our Services. Some
            offerings on the 6Degrees.CASH Site and Features or our Services may be subject to
            additional age restrictions.
          </p>
          <a name="sweepstakes"><h5>Sweepstakes, Contests and Promotions</h5></a>
          <p>
            Any sweepstakes, contests or promotions (collectively, “Promotions“) that may be offered
            via the 6Degrees.CASH Site and Features or our Services may be governed by Additional
            Terms, which may set out eligibility requirements, such as certain age or geographic
            area restrictions, terms and conditions, and details governing how your personal
            information may be used. It is your responsibility to read all Additional Terms to
            determine whether or not you want to or are eligible to participate, enter or register
            in or for the Promotions. By participating in a Promotion, you will be subject to the
            Additional Terms and you agree to comply with and abide by such Additional Terms and the
            decisions of the sponsor(s) thereof. The Third Party Outlets are in no way associated
            with the Promotions.
          </p>
          <a name="rewards"><h5>Rewards Programs</h5></a>
          <h6>Overview</h6>
          <p>
            {' '}
            The Company may offer one or more rewards programs (“Rewards Programs“) under which you
            may have the opportunity to earn rewards (in the 6Degrees.CASH.com program, such rewards
            are called “TLC“). Not all of the 6Degrees.CASH Site and Features offer Rewards
            Programs, however, and Rewards Programs may include Additional Terms that apply to your
            participation in activities allowing you to earn rewards (collectively, “Activities“).
            The Company may limit, suspend or terminate your ability to participate in a Rewards
            Program in its sole and absolute discretion, and may void any TLC, Rewards, or potential
            Rewards you may have earned or accumulated in a Rewards Program, if we determine in our
            sole discretion, that you have not complied with these Terms or any Additional Terms
            applicable to such participation. You agree to abide by the final and binding decisions
            of the Company regarding any Rewards Program and your participation in it. We reserve
            the right to change, suspend, or cancel all or a portion of a Rewards Program, including
            any rewards you may have accrued, at any time. We will generally use reasonable efforts
            to provide notice to you of any material change to or a suspension or cancellation of a
            Rewards Program.
            {' '}
          </p>
          <h6>Earning Rewards</h6>
          <p>
            Rewards can be earned in a Rewards Program by participating in certain Activities, as
            described in the 6Degrees.CASH Site and Features. If you choose to participate and
            follow the instructions associated with an Activity, upon satisfying all of the
            requirements of the Activity, you will be awarded the TLC associated with completing
            that Activity so long as the Company and/or its third-party Rewards Program affiliates
            are able to properly track your valid and completed reward-earning Activities. For
            avoidance of doubt, Company shall not be responsible for, nor shall Company be obligated
            to award TLC or Rewards to Rewards Program participants for, any Activity that is not
            properly recorded, tracked and/or deemed approved under Company’s or its third-party
            Rewards Program affiliates’ policies, procedures and systems, and any TLC or Rewards
            previously granted may be revoked in appropriate circumstances. There may be limitations
            on Activities and Rewards, so please be sure to review all applicable Additional Terms
            before deciding whether or not you would like to participate. For example, we reserve
            the right to request and verify receipts of completed purchases prior to or in
            connection with the awarding of TLC for shopping Activities in order to verify with the
            applicable merchant that such purchases are valid. You agree that we may also contact
            you by phone, SMS or text for the purpose of verifying transactions and/or avoiding
            potential fraud or misuse of our 6Degrees.CASH Sites and Features.  Some of the
            limitations on Activities and rewards include (without limitation), our right to change
            or limit your ability to participate in certain Activities or the Rewards Program
            itself; our right to change or limit the allowable frequency of Activities; our right to
            change or limit the number of TLC you can earn for a given Activity or during a given
            time period; and our right to change the Activities or Rewards available, or the number
            of TLC required for a particular reward. TLC awarded have no redeemable cash value.
            Inactive Accounts Any Account that has not been logged into and awards either earned or
            redeemed for one year or more may be deemed inactive and the Account closed. We may
            either close the Account completely or remove any awards in the Account and treat it as
            inactive, as we elect.  In such instances, to request Account reactivation (subject to
            such terms, limitations and requirements as we may impose from time to time) you may
            reach us by using the “Contact Us”, or sending an email to info@6Degrees.CASH. We may
            modify the foregoing inactive Account rules and policies in our Rewards Programs from
            time to time. Points Expiration Any points in our Rewards Programs that have not been
            redeemed for two (2) years from the time such points were earned or awarded may be
            deemed expired and removed from your Account. In such instances, to request re-crediting
            of the expired points to the Account (subject to such terms, limitations and
            requirements as we may impose from time to time) you can reach us by using the “Contact
            Us”, or by email at info@6Degrees.CASH. We may modify the foregoing points expiration
            rules and policies for any points in our Rewards Programs from time to time.</p>
          <a name="intellectual"><h5>Intellectual Property</h5></a>
            <p>You acknowledge that the 6Degrees.CASH Site and Features have been
            developed, compiled, prepared, revised, selected and arranged by the Company and others
            through the expenditure of substantial time, effort and money and constitutes valuable
            intellectual property and trade secrets of the Company and others. It is our policy to
            enforce these intellectual property rights to the fullest extent permitted under law.
            The trademarks, logos and service marks (“Marks“) displayed on the 6Degrees.CASH Site
            and Features are the property of the Company or third parties and cannot be used without
            the written permission of the Company or the third party that owns the Marks. The
            6Degrees.CASH Site and Features are also protected as a collective work or compilation
            under applicable copyright and other foreign and domestic laws and treaties. Users are
            prohibited from using (except as expressly set forth herein), transferring, disposing
            of, modifying, copying, distributing, transmitting, broadcasting, publicly performing,
            displaying, publishing, selling, licensing, or creating derivative works of any content
            on the 6Degrees.CASH Site and Features or our Services for commercial or public
            purposes. Nothing contained herein shall be construed by implication, estoppel or
            otherwise as granting to the user an ownership interest in any copyright, trademark,
            patent or other intellectual property right of the Company or any third party. The
            Company exclusively owns all worldwide right, title and interest in and to all
            documentation, software, contents, graphics, designs, data, computer codes, ideas,
            know-how, “look and feel,” compilations, magnetic translations, digital conversions and
            other materials included within the 6Degrees.CASH Site and Features and related to our
            Services, and all modifications and derivative works thereof, and all intellectual
            property rights related thereto.
            {' '}
          </p>
          <a name="reporting"><h5>Reporting Copyright Infringement</h5></a>
          <p>
            {' '}
            If you believe that any content, user-posted materials, or any other material found on
            or through the 6Degrees.CASH Site and Features or our Services, including through a
            hyperlink, infringes your copyright, you should notify us. We will process each written
            notice of alleged infringement that we receive and will take appropriate action in
            accordance with applicable intellectual property laws.  We have a policy of terminating
            and/or blocking repeat infringers in appropriate circumstances, in our sole discretion,
            subject to reasonable limitations.
          </p>
          <a name="user-conduct"><h5> User Conduct </h5></a>
          <p>
            You agree that you will not engage in any activity that interferes with or disrupts the
            6Degrees.CASH Site and Features or our Services (or the servers and networks which are
            connected to our Services) or use any service to manipulate your computer or other
            device to gain any advantage on any of our programs. Unless you have been specifically
            permitted to do so in a separate written agreement with us, you agree that you will not
            reproduce, duplicate, copy, sell, trade or resell our Services for any purpose. You
            further agree that your use of the 6Degrees.CASH Site and Features and our Services
            shall not be fraudulent or deceptive, or unlawful, as determined in our sole and
            absolute discretion. You shall also comply with all usage rules found throughout the
            6Degrees.CASH Site and Features and/or our Services, including, without limitation, any
            guidelines posted on any of the 6Degrees.CASH Site and Features. You agree to comply
            with the instructions set out in any robots.txt file present on the 6Degrees.CASH Site
            and Features and our Services. Without limiting the generality of the foregoing, you
            agree not to use the 6Degrees.CASH Site and Features or our Services in order to:
          </p>
          <ul>
            <li>access (or attempt to access) any of our Services by any means other than through the
          interface that we provide;</li>
            <li>share a single Account with any person other than the
          registered Account holder;</li>
            <li>maintain or use any false identity or multiple identities, or
          otherwise fail to participate in our Services using your real identity and accurate
          contact, demographic and other information;</li>
            <li>submit any personal information (name,
          email, zip/postal code, etc.), payment information (credit card number and expiration
          date, etc.), or other information which we determine in our sole discretion to have been
          false, inaccurate or otherwise invalid in connection with any Activities or any other use
          of the 6Degrees.CASH Site and Features or our Services;</li>
            <li>post, upload, transmit or
          otherwise disseminate information that (in our sole discretion) is obscene, indecent,
          vulgar, pornographic, sexual, hateful or otherwise objectionable;</li>
            <li>post spam links,
          and/or personal referral links in an aggressive, wanton, or otherwise inappropriate
          fashion, whether on any 6Degrees.CASH Site and Features or on any other web site or
          application;</li>
            <li>• defame, libel, ridicule, mock, stalk, threaten, harass, intimidate or abuse
          anyone, hatefully, racially, ethnically or, in a reasonable person’s view, otherwise act
          in an offensive or objectionable manner;</li>
            <li> upload or transmit (or attempt to upload or
          transmit) files that contain viruses, Trojan horses, worms, time bombs, cancelbots,
          corrupted files or data, or any other similar software or programs that may damage the
          operation of the Service, other users’ computers, or access to or functionality of the
          6Degrees.CASH Site and Features;</li>
            <li> violate the contractual, personal, intellectual
          property or other rights of any party, including using, uploading, transmitting,
          distributing, or otherwise making available any information made available through the
          6Degrees.CASH Site and Features or our Services in any manner that infringes any
          copyright, trademark, patent, trade secret, or other right of any party (including rights
          of privacy or publicity);</li>
            <li> attempt to obtain account information, passwords or other
          private information from other members;</li>
            <li> improperly use support channels or complaint
          buttons to make false or frivolous reports to the Company or to communicate with our
          customer support representatives in a disrespectful, belligerent or inappropriate manner;
           develop, distribute, make use of, or publicly inform other members of: “auto” software
          programs, “macro” software programs, web crawlers or other script or “cheat utility”
          software programs or applications;</li>
            <li> share or distribute survey IDs, answers or other
          survey information, or otherwise coach or assist other members with regard to qualifying
          for or answering surveys;</li>
            <li>abuse any of our Services in a manner that does not reflect
          normal or appropriate human usage, such as conducting excessive searches or other
          Activities in our Rewards Programs for the sole or primary purpose of receiving points, as
          we may determine in our sole discretion;</li>
            <li>take any action with respect to a merchant,
          advertiser or other third-party offer to earn points that either we or the merchant,
          advertiser, or other third-party offeror determines to have been invalid or made without a
          legitimate interest in the goods or services of the merchant, advertiser or third-party
          offer (such as returning merchandise purchased through a Prodege website or signing up for
          a trial subscription or service offer and then cancelling or seeking a refund without
          having evidenced an intention to actually use the subscription or service);</li>
            <li>exploit,
          distribute or publicly inform other members of any error, miscue or bug (“Error“) that
          gives an unintended advantage, violate any applicable laws or regulations, or promote or
          encourage any illegal or unauthorized activity including, but not limited to, hacking,
          cracking or distribution of counterfeit software, or cheats or hacks for our Services. If
          you find an Error, we kindly request that you report it to our appropriate support team by
          using the “Contact Us”, or by email at info@6Degrees.CASH. If we determine in our sole
          discretion that you have violated these Terms, the Company may in its sole discretion
          issue you a warning regarding the violation prior to terminating or suspending any or all
          Accounts you have created (or which are associated with you) using our Services. However,
          you acknowledge and agree that the Company need not provide you with any prior warning or
          notice before revoking any points or Rewards previously awarded based upon activity in
          violation of these Terms and/or terminating or suspending your Account(s) and/or your
          access to the 6Degrees.CASH Site and Features and our Services for any reason, at its sole
          and absolute discretion.</li></ul>
          <a name="communications-channels"><h5>Communications Channels</h5></a>
          <p>The 6Degrees.CASH Site and Features and
          our Services may include communication channels such as forums, communities, or chat areas
          (“Communication Channels“) designed to enable you to communicate with other Services
          users. The Company has no obligation to monitor these Communication Channels but it may do
          so in its sole discretion and reserves the right to review materials posted to the
          Communication Channels and to remove any materials, at any time, with or without notice
          for any reason, at its sole and absolute discretion. The Company may also terminate or
          suspend your access to any Communication Channels at any time, without notice, for any
          reason. You acknowledge that chats, postings, or materials posted by users on the
          Communication Channels are neither endorsed nor controlled by the Company, and these
          communications should not be considered reviewed or approved by the Company. The Company
          will not under any circumstances be liable for any activity within Communication Channels.
          You agree that all your communications with the Communication Channels are public, and
          thus you have no expectation of privacy regarding your use of the Communication Channels.
          The Company is not responsible for information that you choose to share on the
          Communication Channels, or for the actions of other users. You agree that your use of the
          6Degrees.CASH Site and Features and our Services shall be at your own risk. To the maximum
          extent permitted by applicable law, the Company makes no guarantees, warranties, or
          representations about the accuracy or completeness of the content of the 6Degrees.CASH
          Site and Features or our Services, or the content of any sites linked to our Services, and
          assumes no liability or responsibility for any (i) errors, mistakes, or content
          inaccuracies, (ii) personal injury (including death) or property damage, of any nature
          whatsoever, resulting from your access to and use of the 6Degrees.CASH Site and Features
          or our Services (other than as caused solely by our negligence), (iii) unauthorized access
          to or use of our secure servers and/or any and all personal information and/or financial
          information stored therein, (iv) interruption or cessation of transmission to or from our
          6Degrees.CASH Site and Features or our Services, (v) bugs, viruses, Trojan horses, or the
          like which may be transmitted to or through our Services by any third party, (vi) errors
          or omissions in any content or for any loss or damage of any kind incurred as a result of
          the use of any content posted, emailed, transmitted, or otherwise made available via the
          6Degrees.CASH Site and Features or our Services, and/or (vii) tax liability imposed
          against you by any taxing authority. To the maximum extent permitted by applicable law, in
          no event will the Company, or its affiliates, partners, employees, and agents, be liable
          to you or any third person for any business losses and any liability we do have for losses
          you suffer is strictly limited to losses that were reasonably foreseeable. You
          specifically acknowledge that the Company shall not be liable for user submissions or the
          defamatory, offensive, or illegal conduct of any third party. You agree to hold the
          Company, and each of its affiliates, partners, employees, and agents, harmless from and
          against any claim, cause of action, loss, liability, damages, costs and expenses,
          including reasonable legal fees, arising out of or in connection with (i) your use of and
          access to the 6Degrees.CASH Site and Features or our Services in breach of these Terms;
          (ii) your violation of any term of these Terms; (iii) your violation of any third party
          right, including without limitation any copyright, property, or privacy right, or damage
          to a third party; (iv) any tax obligations arising from or related to your use of the
          6Degrees.CASH Site and Features or our Services; and/or (v) any content you post or share
          on or through the Service. You agree that the Company will not be liable for, or be
          required to provide any compensation to you with respect to, the termination of any
          Rewards Program or any associated Account(s), including without limitation any points,
          Rewards, prizes, or credits in your Account(s) or otherwise existing in your favour at the
          time of termination. Sometimes when you use our Services, you may use a service or
          download a piece of software, or purchase goods, provided by another person or company.
          Your use of these other services, software or goods may be subject to separate terms
          between you and the other company or person. If so, these Terms do not affect your legal
          relationship with these other companies or individuals. You agree that we are not
          responsible for the loss or impairment of any points, Rewards, prizes, or credits,
          regardless of monetary value, in the event there is any: change in the value of each point
          (as determined in Company’s sole and absolute discretion), data or server error, computer
          and/or network system error or failure, criminal act, vandalism, cyber-attack or other
          events which make it commercially unreasonable for us to determine the points balance or
          value of any Account(s). All guarantees, warranties, and representations, whether express
          or implied, as to the condition, suitability, quality, fitness or safety of any goods and
          services supplied under our Rewards Programs or other Services are excluded to the fullest
          extent permitted by applicable law. Any liability the Company may have to a member under
          any such guarantees, warranties or representations implied or imposed by law which cannot
          be excluded is hereby limited, to the extent legally permissible, to supplying or paying
          the cost of supplying the goods or services (or equivalent goods or services) or repairing
          or paying the cost of repairing the goods or re-performing the services, at the Company’s
          sole option. Please note that at any time, we may, in our sole discretion, terminate our
          legal agreement with you and deny you continued use of the 6Degrees.CASH Site and Features
          and our Services, and, without limiting the foregoing, may do so if (i) we are required to
          do so by law (for example, where the provision of our services to you is, or may become,
          unlawful); (ii) the partner with whom we offered our Services to you has terminated its
          relationship with us or ceased to offer their services to you; (ii) we are no longer
          providing all or any portion of our Services to users in the jurisdiction in which you are
          resident or from which you use our Services; or (iv) the provision of our Services to you
          is, in our opinion, no longer commercially viable.</p>
          <a name="tax-matters"><h5> Tax Matters</h5></a>
          <p> You acknowledge and agree that we do not have the ability, in every instance, to determine whether or not the
          points, Rewards, prizes, or credits you earned or redeemed in any Rewards Program are
          considered reportable taxable earnings in your jurisdiction. You are therefore responsible
          for any and all tax liability arising from or associated with your use of the
          6Degrees.CASH Site and Features or our Services, including liability arising from your
          accrual of Rewards Program points or your redemption of such points for cash or other
          value. As a condition of your continued use of the 6Degrees.CASH Site and Features and our
          Services, we reserve the right to require you to provide necessary tax reporting
          information if our records show that you are or may be required to report the value of
          your points, rewards, prizes, or credits to an appropriate tax authority. We encourage
          you, and it is your responsibility, to seek advice of a tax expert in order to determine
          the tax consequences of your use of the 6Degrees.CASH Site and Features and our Services,
          and any associated points, Rewards, prizes, or credits earned or redeemed.</p>
          <a name="notification"><h5> Notification of Changes</h5></a>
          <p> We reserve the right to make changes to these Terms from time to time in our sole
          discretion. If we decide to change these Terms, we will provide notice of such changes by
          sending you an administrative email and/or posting those changes in places on the
          6Degrees.CASH Site and Features deemed appropriate by us so our users are always aware of
          the terms of their use of the 6Degrees.CASH Site and Features and our Services. Your
          continued use of any of the 6Degrees.CASH Site and Features or our Services after delivery
          of the administrative email to you or after the changes are posted constitutes your
          agreement to the changes. If you do not agree to the changes, please discontinue your use
          of such 6Degrees.CASH Site and Features and our Services. To the extent that an arbitrator
          or court of applicable jurisdiction determines that applying any changes to these Terms to
          any prior events or circumstances would render this an illusory or unenforceable contract,
          such changes shall be applicable on a prospective basis only, with respect to events or
          circumstances occurring after the date of such changes, to the extent necessary to avoid
          these Terms being deemed illusory or unenforceable. In any event, if you used any of the
          6Degrees.CASH Site and Features or our Services pursuant to a prior version of these Terms
          that required a certain notice period to you prior to any changes being effective, any
          changes under these Terms will not be effective as to you until the previously-specified
          notice period has passed after the stated effective date of these Terms.</p>
          <a name="international-users"><h5>International Users</h5></a>
          <p>The 6Degrees.CASH Site and Features are controlled, operated, and administered by
          the Company from the offices of its parent company White Hat Solution within the province
          of Ontario, Canada. The Company makes no representation that materials on the
          6Degrees.CASH Site and Features are appropriate or available for use at other locations
          outside of Canada and access to them from territories where the contents or products
          available through the 6Degrees.CASH Site and Features are illegal is prohibited. You may
          not use the 6Degrees.CASH Site and Features or export the content or products in violation
          of Canadian export laws and regulations. If you access 6Degrees.CASH Site and Features
          from a location outside of Canada you are responsible for compliance with all local laws.
          </p>
          <a name="excluded-users-territories"><h5>Excluded Users and Territories</h5></a>
          <p>You are not permitted to download or use any of the
          6Degrees.CASH Site and Features or our Services, including making any purchases of
          products or services from the Company, if you are (i) located in, under the control of, or
          a national or resident of any country to which Canada has embargoed goods or services or
          if the transaction would otherwise be illegal under any applicable law or regulation.</p>
          <a name="governing-law"><h5>Governing Law</h5></a>
          <p>These Terms shall be governed by the laws of Ontario. You agree that any
          dispute between you and us regarding these Terms and the 6Degrees.CASH Site and Features
          and our Services will only be dealt with by the Ontario courts.</p>
          <a name="miscellaneous"><h5>Miscellaneous</h5></a>
          <p>The Company’s failure to exercise or enforce any right or provision of these Terms will not be
          deemed to be a waiver of such right or provision. If any provision of these Terms is found
          by an arbitrator or court of competent jurisdiction to be invalid, the parties
          nevertheless agree that  the arbitrator or court should endeavor to give effect to the
          parties’ intentions as reflected in the provision or the provision shall be deemed
          severable, and the other provisions of these Terms remain in full force and effect. The
          paragraph or section titles in these Terms are for convenience only and have no legal or
          contractual effect. These Terms and any Additional Terms represent the entire
          understanding of the parties regarding its subject matter, and supersede all prior and
          contemporaneous agreements and understandings between the parties regarding its subject
          matter, and may not be amended, altered or waived except in a writing signed by the party
          to be charged or as otherwise expressly provided herein. These Terms are binding upon and
          shall inure to the benefit of parties and their respective successors, heirs, executor,
          administrators, personal representatives and permitted assigns. You may not assign your
          rights or obligations hereunder without the Company’s prior written consent, and any such
          unauthorized assignment shall be null and void. We are required by law to advise you that
          contracts created under these Terms may be concluded in the English language only and that
          no public filing requirements apply.</p>
          <a name="contact-us"><h5>Contact Us</h5></a>
          <p>If you have any questions or concerns
          regarding these Terms or your use of the 6Degrees.CASH Site and Features or our Services,
          please contact us by using the “Contact Us”, or by email at info@6Degrees.CASH
          <a name="third-party"><h5>Additional Terms related to Third Party Outlets</h5></a>
          <p>Apple If you download, access and/or use the
          6Degrees.CASH Site and Features on Apple’s iOS operating system:</p>
            <ul>
            <li>the 6Degrees.CASH Site
          and Features may only be accessed and used on a device owned or controlled by you and
          using Apple’s iOS operating system, and only in accordance with Apple’s usage rules
          published in its App Store terms of service</li>
            <li>you acknowledge and agree that:
            <ul><li>Apple has
          no obligation at all to provide any support or maintenance services in relation to the
          6Degrees.CASH Site and Features. If you have any maintenance or support questions in
          relation to the 6Degrees.CASH Site and Features, please contact us, not Apple</li>
              <li> except as
          otherwise expressly set out in these Terms, any claims relating to the possession or use
          of the 6Degrees.CASH Site and Features are between you and us (and not between you, or
          anyone else, and Apple);</li>
              <li> in the event of any claim by a third party that your possession
          or use (in accordance with these Terms) of the 6Degrees.CASH Site and Features infringes
          any intellectual property rights, Apple will not be responsible or liable to you in
          relation to that claim</li>
              <li>although these Terms are entered into between you and us
          (and not Apple), Apple, as a third party beneficiary under these Terms, will have the
          right to enforce these terms against you</li>
            </ul></li>
            <li>you represent and warrant that:
            <ul>
              <li> you are not,
          and will not be, located in any country that is the subject of a Canadian Government
          embargo or that has been designated by the Canadian Government as a “terrorist supporting”
          country
              </li>
              <li>you are not listed on any Canadian Government list of prohibited or
          restricted parties</li>
            </ul>
          </li>
            <li>if the 6Degrees.CASH Site and Features do not conform to any
          warranty applying to it, you may notify Apple, which will then refund the purchase price
          of the 6Degrees.CASH Site and Features (if any) to you. Subject to that, and to the
          maximum extent permitted by law, Apple does not give or enter into any warranty, condition
          or other term in relation to the 6Degrees.CASH Site and Features and will not be liable to
          you for any claims, losses, costs or expenses of whatever nature in relation to the
          6Degrees.CASH Site and Features or as a result of you or anyone else using the
          6Degrees.CASH Site and Features or relying on any of its content.</li></ul></p>
        </Col>
      </Row>
    </Container>
  </div>
);
