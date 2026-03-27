    // All game scenarios are stored here
    const scenarios = [
      {
      text: "You have recently joined IT Services at the University of Gloucestershire as a graduate cyber security analyst. During a routine review of mail gateway logs, you notice a sudden spike in phishing emails sent to academic and professional services staff. The messages appear to come from IT Support and direct users to a fake Microsoft 365 login page. Several staff have already clicked the link, and one department reports unusual login prompts. Your manager is in a meeting, so you must recommend an immediate response before more accounts are compromised",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2001.jpg",
      choices: [
          {
            text: "Immediate University-Wide Warning",
            getEffects: () => ({ budget: -18000, reputation: +8, security: +10, morale: +4 }),
            getOutcome: () => "You send an immediate warning to all staff, reset exposed accounts, and provide simple guidance on recognising the scam. Staff are alerted quickly, making them less likely to fall victim, while the university’s transparent and proactive response strengthens its reputation. Although the response requires spending on staff time, account resets, user support, and emergency communications, morale improves because staff feel informed and supported."
          },
          {
            text: "Investigate Before Communicating",
            getEffects: () => ({ budget: -8000, reputation: +1, security: +3, morale: -2 }),
            getOutcome: () => "You quietly investigate affected users first, gather evidence, and then send a targeted message later. The review helps identify compromised accounts and improves security slightly, but the delay means the wider university is protected more slowly. Reputation improves a little because action is being taken, although the response is less visible than an immediate full warning. The investigation also requires spending on forensic review, log analysis, and staff time, while morale drops slightly because staff are not warned straight away and may feel unsupported if the issue spreads."
          },
          {
            text: "Block and Monitor Without Warning",
            getEffects: ({ security }) => security >= 110
            ? { budget: -5000, reputation: -4, security: -2, morale: -4 }
            : { budget: -42000, reputation: -16, security: -10, morale: -8 },

            getOutcome: ({ security }) => security >= 110
            ? "You block the sender domain and monitor activity without immediately informing staff. Although the threat is contained more cheaply through blocking, monitoring, and targeted account checks, staff remain unaware and may still interact with phishing messages, so security still declines. If compromises occur, the university’s failure to warn users could appear negligent and harm its reputation, while morale also drops because staff may feel unsupported."
            : "You block the sender domain and monitor activity without immediately informing staff. Because users are not warned, some may continue interacting with phishing messages, which weakens security further. If accounts are compromised, the university’s failure to alert staff could appear negligent and damage its reputation. The delayed response also increases costs through incident response, compromised account recovery, disruption, and follow-up support, while morale drops because staff may feel unsupported."
          }
        ]
      },

      
      {
      text: "A scheduled vulnerability scan identifies a critical flaw in a legacy student records application used by Registry and Student Services. The system stores student names, IDs, contact details, and course information. No confirmed breach has been detected, but the software is externally reachable and the vendor patch has not yet been tested internally. Taking it offline would disrupt enrolment and records work during a busy period.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2002.jpg",
      choices: [
          {
            text: "Take the System Offline Immediately",
            getEffects: () => ({ budget: -70000, reputation: +2, security: +14, morale: -6 }),
            getOutcome: () => "You take the student records system offline until the vulnerability is patched and tested. Security improves significantly because the vulnerable system is removed from operation, and the university is seen to prioritise protection of student data. However, the response is costly because of emergency remediation, service disruption handling, and staff overtime, while morale drops because administrative teams face workflow disruption."
          },
          {
            text: "Apply Temporary Mitigations",
            getEffects: () => ({ budget: -30000, reputation: +3, security: +8, morale: +1 }),
            getOutcome: () => "You restrict network access, increase monitoring, and test the patch while keeping the system running. Security improves because the attack surface is reduced while the patch is being prepared, and reputation rises slightly because the university is managing the risk responsibly without causing major disruption. The response still requires spending on restrictions, monitoring, and testing, but morale improves slightly because staff can keep working  with minimal disruption."
          },
          {
            text: "Monitor and Delay Action",
            getEffects: ({ security }) => security >= 115
            ? { budget: -10000, reputation: -6, security: -4, morale: -3 }
            : { budget: -85000, reputation: -20, security: -16, morale: -9 },

            getOutcome: ({ security }) => security >= 115
            ? "You leave the system running and continue monitoring while planning a future upgrade. Stronger existing security reduces the immediate impact, but the vulnerability still remains exposed. Reputation falls because the delayed response weakens confidence in risk management, and morale also drops because staff are not fully protected."
            : "You leave the system running and monitor it while delaying action. Because the vulnerability remains exposed, security drops sharply and a later breach would seriously damage the university’s credibility. The delayed response also creates major costs through emergency remediation, disruption to Registry services, and investigation and recovery work, while morale falls because confidence in leadership is undermined."
          }
       ]
      },

      {
      text: "While reviewing access logs for a coursework submission platform, you discover that several staff in one school have been sharing a single administrative password. The department argues this is the only practical way to manage urgent deadlines and student extensions. However, shared credentials mean actions cannot be traced to individuals and create a serious accountability problem.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2003.jpg",
      choices: [
          {
            text: "Enforce Individual Accounts",
            getEffects: () => ({ budget: -20000, reputation: +4, security: +12, morale: -5 }),
            getOutcome: () => "You require staff to stop sharing passwords immediately and use individual accounts only. Security improves because named accounts strengthen traceability and accountability, and the university is seen to be applying stronger access control. However, the change requires spending on account setup, IT support, and onboarding, while morale drops slightly because staff must adjust to stricter procedures."
          },
          {
            text: "Temporary Sharing with a Deadline",
            getEffects: () => ({ budget: -8000, reputation: -2, security: -4, morale: -1 }),
            getOutcome: () => "You allow temporary password sharing while IT prepares a better access model. Although this keeps work moving in the short term, shared credentials still weaken accountability and auditability, which harms security and slightly damages the university’s reputation. The interim arrangement also creates uncertainty without fully solving the problem, so morale drops slightly."
          },
          {
            text: "Individual Accounts with MFA",
            getEffects: () => ({ budget: -35000, reputation: +8, security: +16, morale: +3 }),
            getOutcome: () => "You introduce named accounts with multi-factor authentication and short training. Security improves significantly because multi-factor authentication strengthens access protection, and reputation rises because the university adopts more modern security practices. Although the rollout requires spending on licensing, setup, training, and support, morale improves slightly because staff gain clearer and more secure access arrangements with proper support."
          }
        ]
      },

      {
      text: "The IT helpdesk reports that multiple machines in a campus computer lab are showing suspicious pop-ups and attempting to connect to known malicious domains. The lab is heavily used for teaching and assignment submission. Some students have files open on shared machines, and teaching staff are worried about disruption to scheduled sessions later that day.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2004.jpg",
      choices: [
          {
            text: "Shut Down the Lab Immediately",
            getEffects: () => ({ budget: -50000, reputation: +1, security: +14, morale: -8 }),
            getOutcome: () => "You take the entire lab offline, isolate all machines, and cancel sessions while systems are rebuilt. Security improves significantly because the infected systems are fully isolated, and the university is seen to prioritise system safety. However, the response is expensive because of rebuilding costs, emergency IT labour, and teaching disruption, while morale falls because scheduled sessions are interrupted."
          },
          {
            text: "Isolate Affected Machines",
            getEffects: () => ({ budget: +12000, reputation: +4, security: +10, morale: +2 }),
            getOutcome: () => "You remove the infected machines from the network and clean them while keeping the rest of the lab running. Security improves because the infection is contained without a full shutdown, and reputation rises because the issue is handled effectively with less disruption. Budget also improves overall because the university avoids the larger costs of a full lab rebuild, while morale rises because teaching sessions can continue."
          },
          { 
            text: "Keep the Lab Open and Monitor",
            getEffects: ({ security }) => security >= 115
            ? { budget: -7000, reputation: -5, security: -6, morale: -3 }
            : { budget: -65000, reputation: -18, security: -18, morale: -10 },

            getOutcome: ({ security }) => security >= 115
            ? "You keep the lab open to avoid disruption and monitor for further malicious activity. Stronger existing security limits the damage, but the malware may still spread and the university still takes an avoidable risk. Costs are lower because the response focuses on monitoring and follow-up checks, but reputation and morale still fall."
            : "You keep the lab open to avoid disruption and monitor for further malicious activity. Because the malware is not contained quickly enough, it continues spreading across machines, causing major cleanup costs, disruption to teaching, and additional incident response work. Reputation drops sharply and morale falls because confidence in the response is undermined."
          }
        ]
      },

      {
      text: "A monitoring alert shows that a member of staff has exported an unusually large volume of student data from a university system outside normal working hours. The account has legitimate access, but the pattern is unusual. The line manager says the staff member has been under pressure recently and may simply be working from home. You need to advise on the next step.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2005.jpg",
      choices: [
          {
            text: "Immediate Formal Investigation",
            getEffects: () => ({ budget: -25000, reputation: -3, security: +6, morale: -7 }),
            getOutcome: () => "You suspend access temporarily and launch a formal investigation with HR and line management. Security improves because the suspicious behaviour is addressed immediately, but reputation drops slightly because a formal investigation signals a serious internal security issue. The response also requires spending on HR investigation, IT forensic analysis, and management and compliance support, while morale falls because staff may feel under scrutiny."
          },
          {
            text: "Covert Monitoring",
            getEffects: () => ({ budget: -18000, reputation: 0, security: +8, morale: -3 }),
            getOutcome: () => "You monitor the staff member closely, preserve evidence, and delay overt action. Security improves slightly because activity is monitored while evidence is gathered, and reputation remains neutral because the situation is handled internally. The approach still costs money through covert monitoring, evidence preservation, and analyst time, while morale drops slightly because covert monitoring could undermine trust if it is discovered."
          },
          {
            text: "Supportive Manager-Led Check-In",
            getEffects: ({ security }) => security >= 108
            ? { budget: -12000, reputation: +2, security: +2, morale: +6 }
            : { budget: -35000, reputation: -8, security: -6, morale: +2 },

            getOutcome: ({ security }) => security >= 108
            ? "You ask the line manager to hold a welfare and policy discussion while access is reviewed. Because existing security controls are already stronger, the behaviour is addressed early and proportionately. Security and reputation improve slightly, costs stay lower, and morale rises because the response prioritises trust and support."
            : "You ask the line manager to hold a welfare and policy discussion while access is reviewed. Because the issue is not contained strongly enough when existing security is weaker, security falls and reputation also declines. The delayed handling increases later incident, escalation, and containment costs, although morale still rises slightly because the response feels more supportive than punishment."
          }
        ]
      },
      
      {
      text: "Several shared drives used by academic departments become inaccessible, and users see ransom notes demanding payment in cryptocurrency. Some restored files appear corrupted. Teaching materials and administrative documents are affected, and senior leadership wants services back quickly. There is pressure to minimise disruption before students begin submitting coursework.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2006.jpg",
      choices: [
          {
            text: "Refuse Payment and Restore from Backups",
            getEffects: () => ({ budget: -95000, reputation: +6, security: +14, morale: +3 }),
            getOutcome: () => "You refuse the ransom, isolate affected systems, and prioritise restoration from backups alongside incident response. Security improves because systems are recovered through controlled remediation, and the university’s responsible response strengthens reputation. Although the approach is expensive because of restoration work, disruption, and incident response costs, morale improves slightly because leadership takes a principled approach and restores services through proper recovery processes."
          },
          {
            text: "Pay the Ransom Quickly",
            getEffects: () => ({ budget: -140000, reputation: -14, security: -4, morale: -8 }),
            getOutcome: () => "You pay the ransom in an attempt to restore services quickly and reduce visible disruption. Security still falls because paying attackers does not guarantee system safety, and reputation declines because the decision may be seen as irresponsible. The university also absorbs heavy costs from the ransom, recovery activity, and investigation, while morale drops because staff may lose trust in leadership’s judgement."
          },
          {
            text: "Negotiate While Recovering",
            getEffects: ({ reputation }) => reputation >= 110
            ? { budget: -70000, reputation: -4, security: +4, morale: -4 }
            : { budget: -120000, reputation: -18, security: 0, morale: -10 },

            getOutcome: ({ reputation }) => reputation >= 110
            ? "You open communication with the attacker while beginning technical recovery and containment. Because the university already has stronger trust and credibility, the reputational damage is smaller, and security improves slightly as containment starts immediately. Even so, negotiation still feels risky, costs remain significant, and morale falls slightly because staff may feel uneasy about the approach."
            : "You open communication with the attacker while beginning technical recovery and containment. Although recovery starts, negotiating with attackers damages confidence in the university’s response and causes a sharper drop in reputation. Security does not improve overall, costs rise through disruption, negotiation, and recovery effort, and morale falls because prolonged uncertainty weakens confidence in leadership."
          }
        ]
      },

      {
      text: "The university has expanded remote learning and hybrid working, but the current setup relies on basic remote access controls. Some staff are using personal devices, and there have been reports of weak home network security. Leadership wants a practical solution that improves security without causing major complaints from staff and students.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2007.jpg",
      choices: [
          {
            text: "Secure Remote Work Upgrade",
            getEffects: () => ({ budget: +8000, reputation: +8, security: +14, morale: +5 }),
            getOutcome: () => "You deploy stronger VPN controls, endpoint protection, and clearer guidance for personal device use. Security improves because stronger access controls reduce attack risk, and reputation rises because the university shows commitment to protecting digital learning environments. The university also benefits financially overall because reduced support burden and fewer device incidents outweigh the targeted security improvement costs, while morale improves because staff feel better supported with better tools."
          },
          {
            text: "Keep Current Setup with Advice",
            getEffects: () => ({ budget: -12000, reputation: -2, security: -4, morale: 0 }),
            getOutcome: () => "You keep the current setup but issue reminders on safe remote working. Because reminders alone do not meaningfully strengthen remote access protections, security falls slightly and reputation also drops because the response may be seen as insufficient. The university still spends money on awareness guidance, support overhead, and minor control adjustments, while staff morale stays broadly stable because there is no direct disruption."
          },
          {
            text: "Prioritise Convenience Over Security",
            getEffects: () => ({ budget: 0, reputation: -12, security: -16, morale: -3 }),
            getOutcome: () => "You allow open access for ease of use and avoid introducing new controls. Security drops because weak remote access protections increase exposure to cyber risk, and reputation falls because poor protection of remote learning environments could damage trust. Although there is no immediate cost because no new controls are implemented, morale still decreases slightly because staff may feel under-supported if security problems emerge later."
          }
        ]
      },
      
      {
      text: "A school wants to adopt a new cloud-based learning tool before the next teaching block. The supplier promises better student engagement, but the platform has a limited security track record and stores data outside the UK. Academic staff are pushing for a quick approval, while Legal and IT Services want due diligence before rollout.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2008.jpg",    
      choices: [
          {
            text: "Full Security Assessment Before Approval",
            getEffects: () => ({ budget: -28000, reputation: +4, security: +8, morale: +1 }),
            getOutcome: () => "You delay rollout until the supplier completes a security review and contractual safeguards are agreed. Security improves because supplier risks are properly evaluated, and reputation rises because the university shows responsible procurement protects institutional data. The process costs money through security assessment, legal review and approval delay and admin time, but morale improves slightly because staff can feel more confident that any approved tool is secure and properly vetted."
          },
          {
            text: "Approve with Minimal Review",
            getEffects: ({ security }) => security >= 110
            ? { budget: +20000, reputation: -3, security: -4, morale: -2 }
            : { budget: -45000, reputation: -14, security: -12, morale: -7 },

            getOutcome: ({ security }) => security >= 110
            ? "You approve the tool quickly with only a light review to meet teaching timelines. Because existing security is stronger, the impact is less severe and the university saves money by avoiding a full due-diligence process. However, security still falls because the platform may introduce unassessed vulnerabilities, reputation drops slightly because governance appears weaker, and morale also dips slightly because the risks are not fully managed."
            : "You approve the tool quickly with only a light review to meet teaching timelines. Security falls because the platform may introduce unassessed vulnerabilities, and reputation drops because weak oversight can damage institutional trust. The decision leads to later remediation, support, integration, and incident follow-up costs, while morale declines because staff are left dealing with the consequences of poor oversight."
          },
          {
            text: "Reject the Tool Entirely",
            getEffects: () => ({ budget: -3000, reputation: -4, security: +2, morale: -5 }),
            getOutcome: () => "You reject the supplier and ask staff to continue using existing platforms. Security improves slightly because potential third-party risks are avoided, but reputation falls because the university may appear resistant to innovation or unresponsive to teaching needs. The decision has only a small direct cost  on staff time to maintain current platforms and communicate the decision, but morale drops because staff may feel that useful teaching innovation is being restricted."
          }
        ]
      },

      {
      text: "An old on-premises server used by the Development and Alumni team stores contact data, donor histories, and communication preferences. The server is increasingly unstable and no longer supported by the vendor. A replacement project is planned, but not yet funded. You are asked how to reduce risk now.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2009.jpg",
      choices: [
          {
            text: "Replace the Server Now",
            getEffects: () => ({ budget: -110000, reputation: +8, security: +16, morale: +4 }),
            getOutcome: () => "You fund an immediate replacement project and migrate the data to a supported platform. Security improves because outdated infrastructure is replaced with supported systems, and reputation rises because sensitive donor data is better protected. Although the project is expensive because of infrastructure, migration, implementation, and testing costs, morale improves slightly because staff gain a more reliable system."
          },
          {
            text: "Segment and Harden the Server",
            getEffects: () => ({ budget: +15000, reputation: +3, security: +8, morale: +1 }),
            getOutcome: () => "You restrict access, segment the network, and add monitoring as an interim control. Security improves moderately because access restrictions reduce attack exposure, and reputation rises slightly because the university is taking practical action to protect sensitive donor data. The university also saves money overall by delaying full replacement and spending only on segmentation, hardening, and monitoring, while morale improves slightly because operations continue with improved protection and no major disruption."
          },
          {
            text: "Leave It in Place",
            getEffects: ({ security }) => security >= 112
            ? { budget: -5000, reputation: -5, security: -4, morale: -2 }
            : { budget: -60000, reputation: -18, security: -14, morale: -8 },

            getOutcome: ({ security }) => security >= 112
            ? "You keep the server unchanged until the future replacement project begins. Because existing security is stronger, the damage is smaller, but the unsupported system still remains vulnerable. Reputation still drops because delaying action signals weak risk management, costs continue through monitoring and maintenance, and morale falls slightly because staff are left using an unreliable system."
            : "You keep the server unchanged until the future replacement project begins. Security drops because the unsupported system remains vulnerable, and reputation falls because a potential breach could damage trust. The university also faces significant reactive repair, disruption, and emergency support costs, while morale declines because unreliable systems and delayed action undermine confidence."
          }
        ]
      },

      {
      text: "A research centre is storing sensitive project data in shared folders that are accessible to a wider group of staff and postgraduate researchers than intended. The principal investigator wants collaboration to remain easy, but the current permissions mean confidential data could be viewed or altered by people who do not need access.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2010.jpg",
      choices: [
          {
            text: "Restrict Access Strictly",
            getEffects: () => ({ budget: -15000, reputation: +4, security: +12, morale: -3 }),
            getOutcome: () => "You apply least-privilege permissions immediately and log access to sensitive folders. Security improves because tighter access controls protect sensitive research data, and reputation rises because the university shows it takes research integrity seriously. The work still costs money through permission restructuring, logging setup, and admin support, while morale drops slightly because collaboration becomes more restricted."
          },
          {
            text: "Leave Permissions as They Are",
            getEffects: () => ({ budget: 0, reputation: -8, security: -10, morale: -1 }),
            getOutcome: () => "You keep the current permissions to preserve collaboration and avoid complaints. Security falls because excessive access increases the risk of misuse, and reputation also drops because weak data governance could damage research credibility. There is no direct cost because no access changes are made, but morale still decreases slightly because unclear boundaries around access can create unease and reduce trust in data governance."
          },
          {
            text: "Phased Access Review",
            getEffects: () => ({ budget: -22000, reputation: +6, security: +8, morale: +4 }),
            getOutcome: () => "You run a phased access review with the research centre and tighten permissions in stages. Security improves because access is gradually tightened, and reputation rises because governance improves without sudden disruption. The process still costs money through review work, stakeholder coordination, and permissions updates, while morale improves because collaboration can continue during the transition while security is improved."
          }
        ]
      },

      {
      text: "A recent cyber incident affecting an internal university service has been contained, but remediation costs were significant and there is a risk of reputational fallout if details emerge later. Ahead of the next meeting with governors and major funders, senior leadership must decide how much to communicate. Some argue for full transparency, while others want to avoid alarming stakeholders.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2011.jpg",
      choices: [
          {
            text: "Full Transparent Disclosure",
            getEffects: () => ({ budget: -25000, reputation: +10, security: 0, morale: +6 }),
            getOutcome: () => "You fully brief governors and major funders on the incident, the costs, and the remediation actions. Security remains stable because disclosure does not directly change technical controls but it may encourage stronger oversight. Reputation improves because transparency helps build trust with stakeholders, and morale rises because staff can see that leadership is being open and responsible. The approach still requires spending on reporting preparation, stakeholder communication, and supporting evidence."
          },
          {
            text: "Limited Strategic Disclosure",
            getEffects: () => ({ budget: -12000, reputation: +3, security: 0, morale: +1 }),
            getOutcome: () => "You provide a high-level summary that emphasises containment and improvement activity. Security remains stable because remediation is still underway, and reputation improves slightly because stakeholders are given controlled but constructive information. Morale also rises slightly because the issue is acknowledged without creating unnecessary alarm. The response still involves spending on briefing preparation, internal coordination, and communications support."
          },
          {
            text: "Non-Disclosure",
            getEffects: ({ reputation }) => reputation >= 115
            ? { budget: -4000, reputation: -8, security: 0, morale: -8 }
            : { budget: -50000, reputation: -24, security: -4, morale: -15 },

            getOutcome: ({ reputation }) => reputation >= 115
            ? "You decide not to raise the incident unless directly asked, prioritising short-term stability. Security remains stable because non-disclosure does not directly change technical protections and reputation decreases because undisclosed incidents still risk future trust loss, even when prior reputation is strong, costs stay relatively low with only minimal briefing preparation, and morale falls because staff may feel leadership is avoiding accountability."
            : "You decide not to raise the incident unless directly asked, prioritising short-term stability. Security falls because non-disclosure discourages learning from the incident, and reputation drops sharply because undisclosed issues can seriously damage stakeholder trust if they emerge later. The delayed handling also creates major costs through reputational response, emergency stakeholder management, and follow-up remediation, while morale falls because staff may feel leadership is avoiding accountability."
          }
        ]
      },

      {
      text: "Recent phishing simulations show weak staff awareness in several departments. IT Services has proposed a refreshed training programme with short interactive modules and role-specific content. Finance is pushing for lower spend, and some managers think optional guidance is enough. You are asked to recommend an approach for the next academic year.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2012.jpg",
      choices: [
          {
            text: "Mandatory Role-Based Training",
            getEffects: () => ({ budget: -45000, reputation: +6, security: +10, morale: +8 }),
            getOutcome: () => "You launch mandatory interactive training with role-specific modules and follow-up exercises. Security improves because staff gain stronger awareness of phishing and cyber risks, and reputation rises because the university shows a clear commitment to cyber awareness. Although the programme requires spending on platform licensing, content development, delivery, and administration. Morale improves because staff feel more supported and more confident in dealing with security issues."
          },
          {
            text: "Optional Training Modules",
            getEffects: () => ({ budget: +10000, reputation: +1, security: +2, morale: +1 }),
            getOutcome: () => "You provide optional e-learning and awareness posters without making completion mandatory. Security improves slightly because some staff still learn useful security practices, and reputation also improves slightly because the university is seen to be taking some action. The university saves money overall by avoiding a full mandatory programme and only spending on optional materials and awareness resources, while morale rises because staff have more flexibility."
          },
          {
            text: "No New Investment",
            getEffects: () => ({ budget: 0, reputation: -10, security: -10, morale: -6 }),
            getOutcome: () => "You keep the current basic guidance and make no new investment in training. Security falls because staff awareness remains weak, and reputation also drops because poor training may increase the risk of future incidents. Although there is no new spending because the university keeps its current basic approach, morale declines because staff may feel under-supported in dealing with cyber risks."
          }
        ]
      },

      {
      text: "Following concerns about productivity in hybrid working, a senior manager proposes deploying employee monitoring software to track login time, device activity, and application use. HR is concerned about trust and privacy, while some leaders believe the software would improve accountability. You are asked for a security and governance recommendation.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2013.jpg",
      choices: [
          {
            text: "Full Monitoring Deployment",
            getEffects: () => ({ budget: -20000, reputation: -12, security: +2, morale: -18 }),
            getOutcome: () => "You deploy employee monitoring software across the university to track usage and productivity. Security improves slightly because suspicious activity can be detected earlier, but reputation falls because heavy monitoring may be seen as intrusive and ethically problematic. The university also spends money on the monitoring software, deployment, and ongoing oversight, while staff morale drops sharply because employees may feel heavily surveilled."
          },
          {
            text: "Monitoring with Consent and Safeguards",
            getEffects: () => ({ budget: -28000, reputation: +2, security: +4, morale: -2 }),
            getOutcome: () => "You introduce limited monitoring with consent, transparency, and clear governance controls. Security improves moderately because monitoring exists with controlled oversight, and reputation rises because the governance balances security with ethics. The approach still requires spending on monitoring tools, consent and governance processes, and implementation support, while morale drops slightly because monitoring still creates some discomfort even with safeguards."
          },
          {
            text: "Reject Monitoring",
            getEffects: () => ({ budget: +18000, reputation: +4, security: 0, morale: +6 }),
            getOutcome: () => "You Reject the proposal and instead improve trust-based management and guidance. Security remains stable because no new monitoring capability is introduced, while reputation improves because the university is seen to respect employee privacy and trust. The university also saves money by not procuring or deploying monitoring software, and morale rises because staff trust and autonomy are preserved."
          }
        ]
      },

      {
      text: "An internal review finds that one area of campus still relies on weaker Wi-Fi authentication settings for compatibility with older devices. The current setup is convenient, but it increases the risk of unauthorised access and credential misuse. Updating the system would require device re-enrolment and additional support time.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2014.jpg",
      choices: [
          {
            text: "Full Authentication Upgrade",
            getEffects: () => ({ budget: -40000, reputation: +5, security: +12, morale: -2 }),
            getOutcome: () => "You upgrade the remaining Wi-Fi area to stronger authentication and re-enrol affected devices. Security improves because stronger authentication reduces unauthorised access, and reputation rises because the university strengthens network protection. The work requires spending on authentication upgrades, deployment, device re-enrolment, and user support, while morale drops slightly because users must reconfigure their devices."
          },
          {
            text: "Password-Only Improvement",
            getEffects: () => ({ budget: -14000, reputation: +1, security: +4, morale: 0 }),
            getOutcome: () => "You improve passwords and configuration without carrying out the full upgrade. Security improves slightly because password improvements reduce some risk, and reputation also rises slightly because the university is taking visible action to strengthen security. The university still spends money on configuration updates, support time, testing, and rollout, while morale remains stable because disruption is minimal."
          },
          {
            text: "Leave Current Setup",
            getEffects: ({ security }) => security >= 112
            ? { budget: 0, reputation: -4, security: -4, morale: -1 }
            : { budget: -35000, reputation: -14, security: -12, morale: -6 },

            getOutcome: ({ security }) => security >= 112
            ? "You keep the existing weaker authentication settings for compatibility and convenience. Although stronger existing security limits the impact, the weaker setup still remains exploitable, so security declines. Reputation also drops because leaving the weakness in place reflects poor risk management. There is no immediate spend because existing controls remain in place and no corrective work is triggered, and morale falls slightly because staff and students continue using a less secure network."
            : "You keep the existing weaker authentication settings for compatibility and convenience. Security drops because weak authentication remains exploitable, and reputation falls because insecure networks could damage institutional credibility. The delayed approach also leads to later incident response, support disruption, and remedial fix costs, while morale decreases because users remain exposed to avoidable risk even if there is no immediate disruption."
          }
        ]
      },

      {
      text: "The university is considering whether to move more data storage to a third-party cloud provider, retain a strengthened on-premises environment, or adopt a hybrid approach. Cloud migration could improve resilience and scalability, but there are concerns around control, cost, and the handling of sensitive data.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2015.jpg",
      choices: [
          {
            text: "Move to Third-Party Cloud",
            getEffects: () => ({ budget: +25000, reputation: +2, security: +4, morale: +1 }),
            getOutcome: () => "You migrate most storage to a reputable third-party cloud provider and rely on its resilience features. Security improves because cloud providers often offer strong resilience and monitoring, and reputation rises because the university adopts more modern infrastructure. The move also improves the budget overall by reducing hardware maintenance and on-premises running costs, even after migration and setup costs, while morale rises slightly because systems become more reliable."
          },
          {
            text: "Strengthen On-Premises Storage",
            getEffects: () => ({ budget: -80000, reputation: +3, security: +10, morale: +2 }),
            getOutcome: () => "You retain on-premises storage but invest in resilience, patching, and backup improvements. Security improves strongly because local infrastructure receives better protection, and reputation rises slightly because the university is investing in resilient and well-protected internal systems. However, the upgrades require major spending on infrastructure, resilience improvements, backups, and support, while morale improves slightly because existing systems remain familiar while becoming more reliable."
          },
          {
            text: "Hybrid Storage Model",
            getEffects: () => ({ budget: -65000, reputation: +6, security: +8, morale: +4 }),
            getOutcome: () => "You keep highly sensitive data on-premises and move less sensitive data to the cloud. Security increases moderately because sensitive data remains protected  while flexibility imroves. Reputation rises because the university balances innovation with caution, and morale improves because teams benefit from more flexible systems. The approach still requires spending on hybrid setup, integration work, and ongoing support and management."
          }
        ]
      },
];
const scenariosPerRun = scenarios.length;
