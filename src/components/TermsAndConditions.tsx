import styles from "@/styles/contact.module.css";
import {MouseEventHandler} from "react";

const TermsAndConditions = ({
  selectTerms,
  selectedTerms,
}: {
  selectTerms: MouseEventHandler;
  selectedTerms: string;
}) => {
  return (
    <div className={styles.terms}>
      <ul className="flex items-center  gap-[1.25rem] sm:justify-between overflow-auto w-full">
        <li>
          <button
            onClick={selectTerms}
            className={`${
              selectedTerms == "Broadband & Fibre"
                ? "text-[#1c68f5]  border-b-[0.13rem] border-b-[#1c68f5]"
                : "text-[#667085]"
            } text-[0.88rem] leading-[183%] font-medium`}
          >
            Broadband &amp; Fibre
          </button>
        </li>

        <li>
          <button
            onClick={selectTerms}
            className={`${
              selectedTerms == "Telephone Lines"
                ? "text-[#1c68f5] border-b-[0.13rem] border-b-[#1c68f5]"
                : "text-[#667085]"
            }text-[0.88rem] leading-[183%] font-medium`}
          >
            Telephone Lines
          </button>
        </li>

        <li>
          <button
            onClick={selectTerms}
            className={` ${
              selectedTerms == "Hosted VoIP"
                ? "text-[#1c68f5] border-b-[0.13rem] border-b-[#1c68f5]"
                : "text-[#667085]"
            } text-[0.88rem] leading-[183%] font-medium`}
          >
            Hosted VoIP
          </button>
        </li>

        <li>
          <button
            onClick={selectTerms}
            className={`${
              selectedTerms == "Talk4 SLAs"
                ? "text-[#1c68f5] border-b-[0.13rem] border-b-[#1c68f5]"
                : "text-[#667085]"
            } text-[0.88rem] leading-[183%] font-medium`}
          >
            Talk4 SLAs
          </button>
        </li>

        <li>
          <button
            onClick={selectTerms}
            className={`${
              selectedTerms == "Complaints Code"
                ? "text-[#1c68f5] border-b-[0.13rem] border-b-[#1c68f5]"
                : "text-[#667085]"
            } text-[0.88rem] leading-[183%] font-medium`}
          >
            Complaints Code
          </button>
        </li>

        <li>
          <button
            onClick={selectTerms}
            className={`${
              selectedTerms == "Fair Usage"
                ? "text-[#1c68f5] border-b-[0.13rem] border-b-[#1c68f5]"
                : "text-[#667085]"
            } text-[0.88rem] leading-[183%] font-medium`}
          >
            Fair Usage
          </button>
        </li>

        <li>
          <button
            onClick={selectTerms}
            className={`${
              selectedTerms == "Early Termination"
                ? "text-[#1c68f5] border-b-[0.13rem] border-b-[#1c68f5]"
                : "text-[#667085]"
            } text-[0.88rem] leading-[183%] font-medium`}
          >
            Early Termination
          </button>
        </li>
      </ul>

      <div>
        <h1>Terms And Conditions for Broadband &amp; Fibre</h1>

        <p>
          This document sets out the Terms and Conditions of your use of the
          Broadband services provided by Talk4 Telecoms Telecom (“Talk4
          Telecoms”, “We”, “Us”, “Our”) and comprises the entire agreement for
          your use of our Broadband services (“the Agreement”). Any changes or
          additions to these Terms and Conditions, the Broadband Services, or
          associated computer security or backup services and software must be
          agreed to in writing by Talk4 Telecoms. All other terms, express or
          implied by statute or otherwise, are excluded to the fullest extent
          permitted by law. These Broadband Terms and Conditions apply in
          conjunction with the Terms and Conditions of your Telephony Terms and
          Conditions. On cessation of the Telephony Agreement in accordance with
          paragraphs 4a; 4b; 4c and 4d of said agreement, paragraphs 5a; 5b and
          section 6 of the Terms and Conditions of the said agreement will
          continue to apply to this Agreement.
        </p>
      </div>

      <ol className="list-decimal ml-[1.2rem] mb-[2.31rem] sm:ml-auto">
        <li>
          <h2>Commencement and Duration of this Agreement</h2>

          <p>
            1.1 This Agreement commences on the date you accept these Terms and
            Conditions by signing the Talk4 Telecoms Broadband application form,
            applying on-line, or via the telephone application process (the
            “Commencement Date”) and will continue for 12 months or the
            contracted length of time applicable for the Broadband tariff you
            have taken. These Terms and Conditions remain indefinitely
            thereafter unless terminated earlier by either party in accordance
            with Clause 12 of this Agreement.
          </p>
        </li>

        <li>
          <h2>Commencement and Duration of this Agreement</h2>

          <p>
            2.1 We will provide the Broadband services and, if purchased,
            computer security or backup services and email (collectively known
            as the “Broadband Services”) to you with reasonable skill and care
            and in accordance with the provisions of this Agreement. Whilst we
            will use our reasonable endeavours to begin providing these
            Broadband Services by any date provisionally agreed with you, we
            have no liability for any failure to meet any date. We can only
            provide services in areas of the United Kingdom in which we are
            technically able to offer Broadband services from time to time.
            <br /> 2.2 In order to use the Broadband Services, you need an
            existing BT analogue telephone line and a Everyone computer of a
            minimum specification as per Clause 4. You must also ensure that
            compatible cables and extension leads are used to and from your
            telephone socket, modem and PC in order to use the service. You
            acknowledge that we are dependent upon certain third parties to
            install and provide the Broadband Services to you. You also
            acknowledge that there may be technical limits that prevent us from
            delivering an operational service to you. We will endeavour to
            provide the Broadband Services to you at the access rate you choose
            but, due to congestion within the network, the ability of your BT
            line to carry data services, distance from the exchange; the speed
            of service may be reduced at times. 2.3 You must cancel any other
            broadband service supplied by another company through the BT
            telephone landline that you wish to use to receive our broadband
            service and your BT telephone landline at your location must be
            clear of your former supplier&apos;s broadband service.
            Alternatively, you must provide us with a valid migration code to
            transfer the broadband service from your current supplier. If you
            have purchased a computer security service, you must uninstall any
            other computer security services from your computer.
            <br /> 2.4 We do not undertake to provide a fault free service. If,
            however, a fault occurs, you should report the fault by telephone,
            electronic mail or in writing to the Support Service. We will use
            our best endeavours to correct any defect or fault in the services
            provided to you as soon as possible. We will let you know as soon as
            reasonably practicable of any periods of downtime of the Support
            Service.
            <br /> 2.5 Talk4 Telecoms will not be responsible for any Faults
            arising from customer&apos;s premises equipment. A £165 call out
            charge will be applied to engineering visits where the fault is
            found to be with your equipment or where an engineer attends and
            find no fault.
            <br /> 2.6 Modem Support: Modems purchased directly from Talk4
            Telecoms will receive technical support within their warranty
            period. Technical support for modems acquired from any other source
            is therefore the responsibility solely of the modem manufacturer, or
            will be charged if support is received by Talk4 Telecoms.
            <br /> 2.7 We may suspend the Broadband Services including during
            scheduled periods of downtime where necessary for operational
            reasons such as repair, maintenance or improvement of the Broadband
            Services or because of an emergency. Talk4 Telecoms will restore the
            Broadband Services as soon as it reasonably can after suspension.
            <br /> 2.8 We may, for operational or other reasons, change any
            codes or the numbers allocated to you or the specification of the
            Broadband Services but any such changes will not materially affect
            the Broadband Services.
            <br /> 2.9 We reserve the right to vary the Content (as defined in
            clause 5.2 below) from time to time in our sole discretion and do
            not guarantee or warrant that any particular item or items of
            Content will be available at any given time or at the commencement
            of the Broadband Services.
            <br />
            2.10 We may immediately suspend your access to the Broadband
            Services in the event that you do not pay an invoice in accordance
            with Clause 3.
            <br /> 2.11 If you currently receive a Broadband service from an
            alternative supplier you are responsible for any contractual
            agreement you have with them and any liabilities you may incur for
            terminating your current agreement.
          </p>
        </li>

        <li>
          <h2>Charges</h2>

          <p>
            3.1 Talk4 Telecoms charges you for using the Broadband Services
            covered by this Agreement. Initially you are charged at the rates
            specified on the application form or published in our price lists.
            All charges are exclusive of any VAT. Please note:
            <br />
            3.1.1 Talk4 Telecoms will charge £78 + VAT to reinstate lines that
            have been ceased due to non-payment and £25 that have call barring
            <br /> 3.1.2 If you change address, you may transfer the Broadband
            Services to your new address on payment of the moving fee of £51.99
            + VAT.
            <br /> 3.1.3 Charges for your Broadband Services will be
            incorporated into your monthly Talk4 Telecoms Telecom invoice. We
            will send your invoice to the address on your registration details.
            We also reserve the right to send your invoice by email every month.
            <br /> 3.1.4 Talk4 Telecoms will charge a £149.99 + VAT
            disconnection fee should the agreement be terminated due to
            non-payment.
            <br /> 3.1.5 In the event that all telephone lines on the said
            agreement have transferred away or been ceased but the broadband
            connection is still billing on that said agreement your current
            tariff will increase by £5 + VAT.
            <br /> 3.1.6 Talk4 Telecoms will charge £149.99 + VAT cancellation
            fee should the agreement be terminated within the agreed contract
            period length from the Commencement Date. For broadband services,
            Talk4 Telecoms will charge a cancellation fee of £199 + VAT should
            the agreement be terminated within the agreed contract period length
            from the Commencement Date. 3.1.7 If you end your contract for
            Broadband Services with us and do not request and use a MAC, we
            reserve the right to charge, and you agree to pay us a cessation fee
            to cover any cancellation charge that we must pay BT and our
            associated administration costs. The cessation charge will not be
            payable if you are moving home and either you have subscribed to our
            Broadband Services at your new address or we are unable to provide
            the Broadband Services at your new address.
            <br /> 3.1.8 Talk4 Telecoms will apply a reasonable monthly charge
            (see Price list) if your telephone line is incompatible with our
            Next Generation Network or if the telephone exchange that serves
            your telephone line has not been upgraded to support our Next
            Generation Network (see Section 3)
          </p>
        </li>

        <li>
          <h2>Equipment</h2>

          <p>
            4.1 You will ensure that any equipment that you attach (directly or
            indirectly) to the Broadband Services is technically compatible with
            the Broadband Services and that its use does not breach any relevant
            legislation or telecommunications industry standards. 4.2 Minimum
            system requirements: Windows 98 SE (Second Edition), Windows Me
            (Millennium Edition), Windows, 2000 or Windows XP or Macintosh
            operating system versions 9.1 or later 1GHz or above CPU A minimum
            of 20 GB available hard disk space A minimum of 500 MB RAM An
            available Ethernet port
          </p>
        </li>

        <li>
          <h2>Your Use of the Broadband Services</h2>

          <p>
            5.1 These Broadband Services are provided solely for your use and
            you must not resell or attempt to resell the Broadband Services (or
            any part of it) to any third party. In addition, if you have a mail
            server, you must not allow relay emails from outside your domain
            from your mail server.
            <br /> 5.2 We do not warrant or guarantee the accuracy or
            completeness of any of the information, sound, software and any
            other materials (in whatever form) and services made available to
            you as part of the Broadband Services (the “Content”) or any further
            information or results which may be derived from it. You acknowledge
            that you will not rely on any Content in making any business or
            other decision and that your use of the Content is at your sole
            risk.
            <br /> 5.3 Please note that there may be additional conditions
            (either ours or those of a third party) displayed on line relating
            to particular Content. These conditions will also form part of this
            agreement should you access such Content.
            <br /> 5.4 You are entirely responsible for evaluating any goods or
            services offered by third parties via the Broadband Services or on
            the Internet. We will not be a party to or in any way be held
            responsible to you for any transaction between you and third
            parties. 5.5 You warrant that any information you make available on
            your website, both yours (“Customer Information”) or that of a third
            party (“Third Party Content”) is and will remain wholly accurate and
            will not include any information or material, any part of which, or
            the accessing of which or use of which, would be a criminal offence
            or is otherwise unlawful. 5.6 You also warrant that you will comply
            with all consumers and other legislation, instructions or guidelines
            issued by regulatory authorities and relevant licences which relate
            to the provision of the information on your website including those
            notified by us to you. 5.7 You must not use the Broadband Services,
            including associated computer security or backup services and
            software: 5.7.1 in a way that breaches any legislation or any
            licence applicable to you or that is in any way unlawful or
            fraudulent; or 5.7.2 to deliver, knowingly receive, upload,
            download, use or re-use any information or material which is
            abusive, defamatory, obscene or menacing, or in breach of any
            copyright, privacy or any other rights; or 5.7.3 to send or procure
            the sending of any chain letters or unsolicited advertising or
            promotional material (“spamming”); or 5.7.4 in a way that does not
            comply with our specific instructions.
            <br /> 5.7.5 to propagate computer worms or viruses 5.7.6 to attempt
            to gain unauthorised entry to any site or network 5.7.7 to
            distribute child pornography, obscene or defamatory material 5.8 You
            will fully indemnify us against all losses, damages, amounts paid by
            way of settlement, costs and expenses (including legal fees) of
            whatsoever nature suffered or incurred by us arising out of or in
            connection with any actual or potential claims or legal proceedings
            against us by a third party because of your use of the Broadband
            Services in breach of the provisions of this Clause 5. We shall
            notify you of any such claims or proceedings and inform you
            regularly as to the progress of such claims or proceedings.
            <br />
            5.9 You acknowledge that Broadband Services are provided to other
            users and we owe a duty to these users as a whole to preserve our
            network integrity and avoid network degradation. If, in our
            reasonable opinion, we believe that your use of the Broadband
            Services has or may adversely affect such network integrity or may
            cause network degradation we may manage your transmission speed, the
            type of traffic you are passing, and/or suspend your service.
            <br /> 5.10 We operate a fair use policy to protect the quality of
            service to our customers. If we believe that your use of the
            Broadband Service is adversely affecting our network (or any part of
            it) or our other customers use of our services or if your usage is
            significantly different from what we would expect from a business
            customer, we reserve the right to manage or regulate your usage in
            accordance with the fair usage policy. We will not impose any
            restrictions on you or impose an additional charge without prior
            notice. ,If after we have sent you notice, we believe that your use
            of the Broadband Service continues to adversely affect our network
            (or any part of it) or our other customers use of our services or if
            your usage continues to be significantly different from what we
            would expect from a business customer then we may: 5.10.1 Restrict
            your download and upload speeds; 5.10.2 Apply additional charges for
            additional high bandwidth usage; 5.10.3 Suspend your service; and
            5.10.4 Cease your service.
            <br /> 5.11 We may require you to reimburse us for any reasonable
            and foreseeable losses, costs and expenses which we incur as a
            direct result of the misuse of the broadband service either by
            yourself or by someone you have knowingly allowed to use the
            Broadband Service we provide to you.
          </p>
        </li>

        <li>
          <h2>User names and Passwords</h2>

          <p>
            6.1 You must ensure that user names and passwords used in connection
            with the Broadband Services are kept confidential and are only used
            by authorised users. Please inform us immediately if you know or
            suspect that a user name or password has been disclosed to an
            unauthorised user or is being used in an unauthorised way. You must
            not change or attempt to change a user name without our written
            consent.
            <br /> 6.2 We reserve the right (at our sole discretion): 6.2.1 to
            suspend user names and password access to the Broadband Services if
            at any time we think that there has been or is likely to be a breach
            of security; and 6.2.2 to ask you to change any or all of the
            usernames and passwords you use in connection with the Broadband
            Services.
            <br /> 6.3 You must inform us immediately of any subsequent changes
            to the information you supply to us when you register for the
            Broadband Services.
            <br /> 6.4 You accept and acknowledge that the Broadband Services,
            like other Internet applications, are not secure and we do not
            guarantee the prevention or detection of any unauthorised attempts
            to access the Broadband Services.
          </p>
        </li>

        <li>
          <h2>Everyone Data</h2>

          <p>
            7.1 We may contact you before, during and after the term of this
            Agreement in order to administer, evaluate, develop and maintain the
            Broadband Services. Please note that we may record your telephone
            calls with us and we will keep a record of Everyone information you
            provide to us in connection with the Broadband Services. 7.2 We will
            comply with our obligations under the Data Protection Act 1998 and
            other any applicable data protection legislation. You are also
            required to comply with all data protection legislation. In
            addition, you must maintain all required registrations, including
            those reasonably requested by us to enable us to process your
            Everyone data in connection with our performance of our obligations
            under this Agreement. 7.3 By registering for the Broadband Services
            you consent to our using and/or disclosing your Everyone information
            for the following purposes: 7.3.1 processing your application (which
            may involve credit checking by a licensed credit reference agency
            who may record that a credit check has been made and disclosing
            certain Everyone and account details to a bank for the purposes of
            setting up a direct debit account); 7.3.2 providing or arranging for
            third parties to provide Customer Care/Help Desk facilities and
            billing you for the Broadband Services (which may involve disclosing
            your information to third parties solely for those purposes); and
            7.3.3 to selected third parties for the purposes of providing and
            operating the Broadband Services.
          </p>
        </li>

        <li>
          <h2>Intellectual Propety Rights</h2>

          <p>
            8.1 You warrant that you are the owner of, or that you are
            authorised by the owner of, any trade mark or name that you wish to
            use as your registered Domain Names (“Domain Names”) and use as part
            of your uniform resource locator (“URL”).
            <br /> 8.2 If we undertake Domain Names and URL registration on
            behalf of you, you will reimburse us for any registration fees paid
            by Talk4 Telecoms Telecom to the Internet registration authorities.
            We do not guarantee that any Domain Names or URL requested by you
            will be available.
            <br /> 8.3 We may require you to select a replacement Domain Names
            or URL and may either refuse to provide or may suspend the Broadband
            Services if we reasonably believe that the Domain Names or URL is,
            or is likely to be, offensive, abusive, defamatory or obscene or in
            breach of the provisions of Clause 5.7.
            <br /> 8.4 Any patents, design rights, know-how, copyrights,
            trademarks, the right to use software and all other similar
            intellectual property proprietary rights (whether registered or
            unregistered) worldwide (“Intellectual Property Rights”) relating to
            the Broadband Services, including backup and computer security
            software packages, or arising during the development of the
            Broadband Services, belong to us or to a relevant third party. 8.5
            The Content is protected by copyright, trademark and other
            Intellectual Property Rights, as applicable. You must not and must
            not permit anyone else to copy, store, modify, distribute
            externally, broadcast or publish any part of the Content, and the
            Content may only be used for your own purposes.
          </p>
        </li>

        <li>
          <h2>Software</h2>

          <p>
            10.1 Where we provide software to you to enable you to use the
            Broadband Services, including backup and computer security services
            (“Software”), we grant you a non-exclusive, non-transferable licence
            to use the Software solely for the term and purposes of the
            Agreement. You use this software at your own risk. You agree to use
            the software only in accordance with the End User License Agreement,
            which you will be required to accept in order to install the
            software.
            <br /> 10.2 Any software provided to you as part of the Broadband
            Services is provided for your use only. You must not re-sell, rent,
            transfer, assign or sub-license the software to anyone else. You may
            make one copy of the software for back up purposes, but are not
            otherwise allowed to copy, decompile or modify the software (in
            whole or in part) for any purpose unless specifically permitted by
            law. You may not adapt, transmit, distribute externally, play or
            show in public, broadcast or publish any part of the software.
            Except as permitted by applicable law or as expressly permitted
            under this Agreement you must not copy, de-compile or modify the
            Software (in whole or in part), or copy the manuals or documentation
            (in whole or in part).
            <br /> 10.3 We may offer updates or modifications to the Software or
            documentation and we will notify you of any applicable charges for
            such updates or modifications at the time we offer them to you.
          </p>
        </li>

        <li>
          <h2>Software</h2>

          <p>
            10.1 Where we provide software to you to enable you to use the
            Broadband Services, including backup and computer security services
            (“Software”), we grant you a non-exclusive, non-transferable licence
            to use the Software solely for the term and purposes of the
            Agreement. You use this software at your own risk. You agree to use
            the software only in accordance with the End User License Agreement,
            which you will be required to accept in order to install the
            software. 10.2 Any software provided to you as part of the Broadband
            Services is provided for your use only. You must not re-sell, rent,
            transfer, assign or sub-license the software to anyone else. You may
            make one copy of the software for back up purposes, but are not
            otherwise allowed to copy, decompile or modify the software (in
            whole or in part) for any purpose unless specifically permitted by
            law. You may not adapt, transmit, distribute externally, play or
            show in public, broadcast or publish any part of the software.
            Except as permitted by applicable law or as expressly permitted
            under this Agreement you must not copy, de-compile or modify the
            Software (in whole or in part), or copy the manuals or documentation
            (in whole or in part). 10.3 We may offer updates or modifications to
            the Software or documentation and we will notify you of any
            applicable charges for such updates or modifications at the time we
            offer them to you.
          </p>
        </li>

        <li>
          <h2>Limitation of Liability</h2>

          <p>
            11.1 Nothing in this Agreement excludes or limits each party&apos;s
            liability with respect to death or Everyone injury resulting from
            the negligence of that party, its employees, agents or
            subcontractors or for fraudulent misrepresentation or under the tort
            of deceit. 11.2 We shall not be liable to you, whether in contract,
            tort (including negligence) or otherwise, for direct or indirect
            loss of profits, business, revenue, any contract, opportunity, or
            anticipated savings, loss of goodwill or injury to reputation, nor
            for any indirect or consequential or special loss or damage or for
            any destruction or loss of use of any data, including any corruption
            of data or losses arising from your use of or failure to use the
            computer security or backup services or software, whether any such
            losses could be reasonably foreseen by us or not. 11.3 Subject to
            Clauses11.1 and 11.2, our liability to you in contract, tort,
            negligence or otherwise arising out of or in connection with this
            Agreement shall for any one incident or series of related incidents
            be limited to the annual fees paid by you to us in the year in which
            the liability first arose. 11.4 We are under no obligation to edit,
            review or modify Customer Information or Third-Party Content.
            However, we reserve the right to remove any Customer Information or
            Third-Party Information without notice. 11.5 We exclude all
            liability of any kind in respect of: 11.5.1 Customer Information,
            Third Party Content, Content and any other material on the Internet
            which can be accessed using the Broadband Services and we are not
            responsible in any way for any goods (including software) or
            services provided by third parties advertised, sold or otherwise
            made available by means of the Broadband Services or on the
            Internet; 11.5.2 the accuracy, completeness or suitability for any
            purpose of any Content; and 11.5.3 the acts or omissions of other
            providers of telecommunications or Internet services (including
            Domain Name registration authorities) or for faults in or failures
            of their equipment.
          </p>
        </li>

        <li>
          <h2>Termination of this Agreement</h2>

          <p>
            12.1 We may at any time (whether during the Initial Period or
            otherwise) terminate this Agreement giving 90 days notice to you.
            12.2 We may at our sole discretion terminate this Agreement or
            suspend the Broadband Services immediately, in the event that:
            12.2.1 we are directed by any competent authority to cease the
            provision of the Broadband Services or any part of it; or 12.2.2 you
            fail to pay any charges for the Broadband Services; or 12.2.3 any
            credit card or direct debit details submitted by you for payment are
            found not to be or cease to be valid; or 12.2.4 if you use the
            Broadband Services in contravention of any of Clauses 5, 6 and 8; or
            12.2.5 your contract with us or your telecoms provider for your
            direct analogue exchange line is terminated; or 12.2.6 our contract
            with any third party who assists us in providing the Broadband
            Services to you is terminated; or 12.2.7 we become aware of any
            breach of third-party Intellectual Property Rights caused by the
            Customer Information or the Third Party Content; or 12.2.8 you are
            in breach of our Fair Usage Policy If we suspend the Broadband
            Services in accordance with this Clause 12.2, we may, at any time
            following such suspension (and if the circumstance in Clause 12.2
            remains) immediately terminate the Agreement. 12.3 You have the
            right to cancel this Agreement by giving written notice within 5
            days from the date of acceptance of this Agreement. If we have
            supplied you with a Modem as part of a promotional offer you must
            either pay for the Modem or return such Modem to us unused and in
            the original undamaged packaging. 12.4 You may terminate this
            Agreement on giving at least 1 months&apos; notice, such notice to
            be effective no earlier than the end of the first 12 months period
            or the length of time applicable to the Broadband contract you have
            taken from the Commencement Date. You must pay all Fees for the
            Broadband Services until the date on which the termination notice
            expires. 12.5 You may also terminate this Agreement at any time on
            giving at least 1 months&apos; notice if you move to a new address
            to which it is not possible to provide the Broadband Services on
            production of proof of your changed address. 12.6 Either party may
            terminate this Agreement immediately, on notice, if the other
            commits a material breach of this Agreement and fails to remedy the
            breach within 28 days of a written notice to do so, or if the other
            goes into liquidation, becomes bankrupt, has a receiver appointed,
            makes a composition or voluntary arrangement with creditors or
            enters into administration, or a moratorium comes into force in
            respect of the other (within the meaning of the Insolvency Act
            1986). 12.7 Upon termination or expiration of this Agreement
            registration to any of our services or those of third parties
            provided in the course of and/or for the purposes of the Broadband
            Services will cease at such time as the provision of the Broadband
            Services ends.
          </p>
        </li>

        <li>
          <h2>Force Majeure</h2>

          <p>
            13.1Neither party will be liable to the other for any failure to
            deliver the Broadband Services or for any breach by it of this
            Agreement, where such failure or breach is due to a reason outside
            the reasonable control of such party, including, but not limited to:
            lightning, exceptionally severe weather, fire, explosion, war,
            industrial disputes, government action or regulation or national or
            local emergency. If such failure to deliver continues for more than
            3 months after the commencement of such failure, then either party
            may terminate this Agreement on notice in writing to the other
            party.
          </p>
        </li>

        <li>
          <h2>General Provisions</h2>

          <p>
            14.1 We may change the provisions of this Agreement (including the
            charges) at any time, provided that we will give you notice of the
            changes at least 30 days before the change is to take effect at
            which time you may terminate this Agreement without charge if the
            change materially affects the Broadband Services. 14.2 This
            Agreement represents the entire agreement between the parties in
            relation to its subject matter and supersedes all agreements and
            representations made by either party, whether oral or written. 14.3
            The parties acknowledge and agree that: 14.3.1 the parties have not
            been induced to enter into this Agreement by any representation,
            warranty or other assurance not expressly incorporated into it; and
            14.3.2 in connection with this Agreement the parties&apos; only
            rights and remedies in relation to any representation, warranty or
            other assurance are for breach of this Agreement and that all other
            rights and remedies are excluded, except in the case of fraud. 14.4
            The parties do not intend that this Agreement be enforceable by any
            person not a party to this Agreement including under the General
            Terms (Rights of Third Parties) Act 1999 with the only exception of
            Clause 11 above which will also be enforceable by Talk4 Telecoms
            directors, employees, agents and subcontractors. 14.5 Notices given
            under this Agreement must be in writing and may be delivered by
            hand, courier or first-class post, by fax or e-mail to the following
            addresses: (a) to us at the relevant address provided during the
            registration process for Talk4 Telecoms or any alternative address
            which Talk4 Telecoms notifies to you; (b) to you at the relevant
            postal or email address provided as part of the details which you
            submit during the registration process or any alternative address
            that you provide to Talk4 Telecoms. 14.6 You may not assign, novate,
            sub-contract or transfer any of your rights or obligations under
            this Agreement. We may from time to time, transfer, novate or assign
            any of our rights and/or obligations under this Agreement, including
            partial assignment, to a party who agrees to continue complying with
            our obligations under the Agreement. 14.7 If any part, term or
            provision of this Agreement is held to be illegal or unenforceable
            the validity or enforceability of the remainder of this Agreement
            will not be affected. 14.8 If either party delays in acting upon a
            breach of this Agreement that delay will not be regarded as a waiver
            of that breach. If either party waives a breach of this Agreement
            that waiver is limited to that particular breach.
          </p>
        </li>

        <li>
          <h2>Law</h2>

          <p>
            15.1 This Agreement will be governed by and construed and
            interpreted in accordance with the law of England and Wales and the
            parties submit to the exclusive jurisdiction of the English Courts
            for the determination of any dispute or other matter which arises
            out of or in connection with this Agreement.
          </p>
        </li>

        <li>
          <h2>Access to End-User Premises</h2>

          <p>
            16.1 To enable Talk4 Telecoms to carry out its obligations under the
            Agreement, the End-Users must provide to representatives of Talk4
            Telecoms and any Broadband Access Provider access to all End-User
            Premises at all reasonable times, including access for the purposes
            of installation, inspection, maintenance, replacement, upgrade, or
            removal of the Broadband Access Connection and any equipment
            associated with it.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TermsAndConditions;
