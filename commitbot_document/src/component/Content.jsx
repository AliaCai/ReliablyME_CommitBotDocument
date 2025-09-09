import React from 'react'
import '../style/Content.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import sec1_img1 from "../asset/sec1_img1.png"
import sec1_img2 from "../asset/sec1_img2.png"
import sec1_img3 from "../asset/sec1_img3.png"
import sec1_img4 from "../asset/sec1_img4.png"
import sec2_img1 from "../asset/sec2_img1.png"
import sec3_img1 from "../asset/sec3_img1.png"
import sec3_img2 from "../asset/sec3_img2.png"

import sec4_img1 from "../asset/sec4_img1.png"
import sec4_img2 from "../asset/sec4_img2.png"
import sec4_img3 from "../asset/sec4_img3.png"
import sec4_img4 from "../asset/sec4_img4.png"
import sec4_img5 from "../asset/sec4_img5.png"
import sec5_img1 from "../asset/sec5_img1.png"
import sec5_img2 from "../asset/sec5_img2.png"

import sec6_img1 from "../asset/sec6_img1.png"
import sec6_img2 from "../asset/sec6_img2.png"
import sec6_img3 from "../asset/sec6_img3.png"
import sec6_img4 from "../asset/sec6_img4.png"
import sec6_img5 from "../asset/sec6_img5.png"
import sec6_img6 from "../asset/sec6_img6.png"

import sec7_img1 from "../asset/sec7_img1.png"
import sec8_img1 from "../asset/sec8_img1.png"
import sec8_img2 from "../asset/sec8_img2.png"
const Content = () => {
    const rows=[
        {name:"/login",description:'Link your Slack and ReliablyME accounts'},
     {name:"/register",description:'Register a ReliablyME account'},
      {name:"/create",description:'Manually create a commitment'},
       {name:"/commitments",description:'View your current active commitments'},
        {name:"/instructions",description:'Get usage tips and help'}
]
    return (
    <div className='content'>

        <div id='intro' className='content_intro'>
            <div className='content_title'>What is CommitBot?</div>
            <div className="content_content"><span className='heavy'>CommitBot</span> is a tool within Slack that helps you keep track of your promises, such as tasks you have committed to completing. It is part of a larger system called <span className='heavy'></span>ReliablyME, which is designed to help teams stay accountable and build trust.

            <br/><br/>
            When you send a message in Slack like <span className='heavy'>“I’ll send the report by Friday,”</span> CommitBot can recognize that you made a commitment. It will then give you the option to track it, so you don’t forget, and your team stays informed.
            <br/> <br/>
            CommitBot operates entirely within Slack, making it easy to stay organized <span className='heavy'>without</span> leaving the app. The full ReliablyME platform also includes a website and mobile app where you can review your commitments, track your progress, and view your trust score over time.
            
            <br/><br/>
            <span className="highlight">Note:The word “invitation” in some screenshots is an old expression, hence you can view it as "request now."</span> <br/><br/>
            <span className="highlight">Note: Formalizing completion shortcut only working on auto-recognized commitments. We are still working on upgrade."</span><br/><br/>
            <span className="highlight">Note: the function of creating a request to multiple people is still on the processing of building."</span><br/><br/>

            </div>
        </div>
        < div id='setup' className=' content_setup'>
            <div className='content_title'>Installation & Configuration</div>
            <div className="content_content">
            <span className="highlight">Note: Admin access is required to install and configure CommitBot in your workspace.</span>
            <br/><br/>1. 
            <span className='heavy'>To install CommitBot:</span>
             Go to https://slack.reliably.me/slack/install
            <img src={sec1_img1} alt="instruction1" />
             <br/> <br/>
            2. Authorize the bot via Slack’s OAuth flow.
            <img src={sec1_img2} alt="instruction2" />
            <br/> <br/>
            3. The bot will appear in your Slack Apps list.
            <br/> <br/>
             <span className='heavy'>To configure monitored channels:</span>
            <ul className='cotent_list'>
            <li className='cotent_item'>Click on the <span className='heavy'>ReliablyME CommitBot</span> at the top in Slack.</li>
            <img src={sec1_img3} alt="ReliablyME CommitBot" />

            <li className='cotent_item'>Click Add this app to a channel.</li>
            <img src={sec1_img4} alt="add this app" />

            <li className='cotent_item'>Choose the public channels where CommitBot should listen.</li>
            </ul>
            <span className='highlight'>You can configure CommitBot to monitor any public and private channel. To configure CommitBot to monitor a private channel, simply invite it into a group chat with other users in Slack.</span></div>
        </div >
        < div name='Overview of CommitBot' id='overview' className='content_overview'>
            <div className='content_title'>Overview of CommitBot</div>
            <div className="content_content">CommitBot listens to conversations and detects:
                <ul className='cotent_list_plain'>
                      <li className='cotent_item_plain'><span className='heavy'>Offers:</span> "I’ll send it tomorrow"</li>
                      <li className='cotent_item_plain'><span className='heavy'>Requests:</span> "Can you finish this today?"</li>
                      <li className='cotent_item_plain'><span className='heavy'>Completions:</span> "Done", "I have completed the project."</li>
                </ul>
            When CommitBot notices these kinds of messages, it sends private follow-ups right under the Slack thread to:
            <img src={sec2_img1} alt="private follow-ups" />     
            <ul className='cotent_list_plain'>
            <li className='cotent_item_plain'>Remind the user to turn their message into a formal commitment</li>
            <li className='cotent_item_plain'>Keep track of who promised what and by when</li>
            <li className='cotent_item_plain'>Trigger a badge to recognize the person when the task is completed</li>
            </ul>
            </div>
        </div > 
        < div  id='start' className='content_start'>
            <div className='content_title'>Getting Started</div>
            <div className="content_content">
            <ul className='cotent_list_plain'>
            <li>To get started, if you haven’t registered with the ReliablyME platform yet, type “/register” in Slack and press Enter.
            <img src={sec3_img1} alt=" type “/register”" />
            </li>
            <li>After that, you'll be prompted to complete your registration via WhatsApp or SMS by providing your name and some basic information.</li>
            <li>Once you’ve completed registration, return to Slack and type “/login”. A pop-up will appear prompting you to enter your first and last name, along with your phone number.</li>
            <li>You’ll see a prompt that says “Enter OTP”. This simply means a one-time verification code will be sent to your phone. Enter that code to confirm your identity, and once verified, you’ll be successfully logged into CommitBot!</li>
            </ul>
            🔐<span className='highlight'>All CommitBot prompts are private unless formalized.</span> 
            <br /> <br />
            <img src={sec3_img2} alt="private prompts" />

            </div>
        </div > 
        < div id='commitments' className='content_commitments'>
            <div className='content_title'>Working with Commitments</div>

            <div className="content_content">
            <span className='heavy'>Automatic Workflow (Primary Use Case):</span>
            <ol className="cotent_list_plain">
                <li>A user types a natural commitment in Slack (e.g., “I will complete this project by tomorrow”).CommitBot displays a private prompt (only to that user): “Do you want to formalize this?”</li>
                <img src={sec4_img1} alt="private prompt" />
                <li>User clicks Formalize Offer, fills out the form, and submits.</li>
                <li>The commitment will now appear in /commitments, so you can easily keep track of what you’ve promised to do.</li>
            </ol>
         
             <span className='heavy'>Manual Workflow:</span>
            Use the slash command /create to enter a commitment manually, which will have two types of commitments:
            <img src={sec4_img2} alt="two types of commitments" />

             <ul className="cotent_list_plain">
                <li> <span className='heavy'>Create Offer</span>  – Use this when you want to make a promise to someone else. You’ll describe what you’re committing to and set a due date.</li>
                <li> <span className='heavy'>Create Request</span>  – Use this when you want to request someone else to make a commitment to you. You’ll describe what you're asking them to commit to and send the request for their approval.</li>
             </ul>
            <img src={sec4_img3} alt="create commitments" />

            <span className='heavy'></span>Create Offer:
            Use this form when you want to offer a commitment to someone. You'll fill out the following fields:

            <ul className="cotent_list_plain">
                <li><span className='heavy'>Describe what you're offering to do </span>– Clearly state the task or action you're committing to complete.</li>
                <li><span className='heavy'>To whom?</span> – Select the user(s) in Slack you’re sending the commitment to.</li>
                <li><span className='heavy'>Select a due date</span> – Choose when you will complete the task.</li>
                <li><span className='heavy'>Pick a time for the due date</span> – Set the specific time the task is due.</li>
                <li><span className='heavy'>Select Badge Type</span> – Choose the badge that will be earned once the commitment is fulfilled (e.g., SLACK_PROMISE_KEPT_BADGE)</li>
            </ul>
            Once submitted, the recipient will receive your offer and can accept or decline it.
            <img src={sec4_img4} alt="create new offer" />

            <span className='heavy'></span>Create Request:
            Use this form when you want to request someone else to make a commitment to you. This is ideal for delegating or requesting a specific action from someone.

            <ul className="cotent_list_plain">
                <li><span className='heavy'>Describe what you're requesting someone to do</span> – Write what you are asking the other person to commit to.</li>
                <li><span className='heavy'>To whom?</span> – Select the Slack user(s) you want to send the request to.</li>
                <li><span className='heavy'>Select Badge Type</span> – Choose the badge that will be awarded when they complete the commitment.</li>
            </ul>

            <img src={sec4_img5} alt="create new invitations" />

            After you submit the form, the recipient will receive a request and can choose to accept or decline.

            Tip: You can also use message shortcuts by clicking the three dots at the side to formalize offers and requests from a message sent in the chat.
            </div>
        </div > 
        < div  id='action' className='content_action'>
            <div className='content_title'>Accepting, Declining & Clarifying</div>
            <div className="content_content">When you receive a <span className='heavy'>request</span> or <span className='heavy'>offer</span> from CommitBot, you will see a private message or prompt with action buttons. These allow you to respond directly without leaving Slack.
                    <span className='heavy'>For requests and offers:</span>
                    <ul className="cotent_list_plain">
                        <li><span className='heavy'>Accept </span>– Confirms you agree to take on the commitment, adding it to your active commitments in <span className='heavy'>/commitments</span>.</li>
                        <li> <span className='heavy'>Decline</span>– Politely refuses the request and notifies the issuer, with no commitment created.</li>
                        <li><span className='heavy'>Request Clarification</span>– Send a message to the issuer asking for more details before you decide. The original offer will remain pending until you respond.</li>
                    </ul>
                    <img src={sec5_img1} alt="a new pending invitation" />
                    <span className='heavy'>What issuers see:</span>

                    Issuers get a confirmation message for each action taken, including any clarification requests.
                    <img src={sec5_img2} alt="somepne accepts invitation" />

                    <span className='highlight'> <span className='heavy'>Tip:</span>You can review all active and pending items in /commitments.</span>
            </div>
        </div > 
        < div  id='completion' className='content_completion'>
            <div className='content_title'>Completion & Badges</div>
            <div className="content_content">
                
                When a committer finishes their task:
                 <ul className="cotent_list_plain">
                    <li>The <span className='heavy'>committer</span> can either explicitly say they’ve completed it or simply reply “done” as a thread to the original commitment message to request a badge.</li>
                    <li>You can add a short note about what you have done and the hours worked. These will appear for the issuer when they review and approve the task.
                        <img src={sec6_img1} alt="completion" />
                    </li>
     
                 </ul>
               <span className='heavy'> After a task is completed and a request has been sent, the receiver can:</span>

                 <ul className="cotent_list_plain">
                    <li><span className='heavy'>Issue</span> – Accepts the badge, confirming completion and adding it to your CommitBot and ReliablyME profile.</li>
                    <li><span className='heavy'>Reject</span> – Declines the badge, notifying the issuer and preventing it from being added.</li>
                    <li><span className='heavy'>Clarify</span> – Requests more information if you are unsure why the badge was awarded, before deciding to accept.
                        <img src={sec6_img2} alt="request badget" />
                    </li>
                 </ul>

                The issuer can also <span className='heavy'>formalize completion before the committer</span> does by clicking the 3 dots at the side and using the CommitBot shortcut to formalize the completion. This marks the commitment as complete, even if the committer hasn’t requested a badge yet.
                
                <img src={sec6_img3} alt="more actions" />
                <img src={sec6_img4} alt="formalize completion" />

                A message from CommitBot will display, asking if you would like to send the badge.
                <img src={sec6_img5} alt="send the badge" />

                Simply click the “Send Badge” button, and you have now successfully sent a badge!
                <img src={sec6_img6} alt="successful message" />

                <span className='highlight'><span className='heavy'>Note:</span> The issuer’s ability to formalize completion using the shortcut currently only works for <span className='heavy'>auto-recognized commitments </span>(for example, when a user types something like “I will complete this tomorrow”). This feature does not yet apply to commitments created manually with the <span className='heavy'>/create </span>command, but it will be supported in future versions of CommitBot.</span>
            </div>
        </div > 
        < div  id='done' className='content_donw'>
            <div className='content_title'>Where can I say “Done”?</div>
            <div className="content_content">Simply reply “Done” to the original commitment message in a thread to request a badge :)</div>
            <img src={sec7_img1} alt="send 'done' msg" />
        </div > 
        < div  id='notification' className='content_notification'>
            <div className='content_title'>Reminders & Notifications</div>
            <div className="content_content">
                 <ul className="cotent_list_plain">
                    <li>Automatic reminders are sent before the due date of a commitment, giving you a heads-up that it’s coming up soon.</li>
                    <li>If you’re logged into the ReliablyME service, you’ll receive these reminders through SMS or WhatsApp.</li>
                    <li>To enable SMS/WhatsApp reminders, verify your phone number using /login (you’ll be asked to enter a 4-digit OTP).</li>
                 </ul>
        </div > 
        < div  id='data' className='content_data'>
            <div className='content_title'>Managing Your Profile & Data</div>
            <div className="content_content">To change your display name, type /login in CommitBot and click “update profile”.</div>
            <img src={sec8_img1} alt="type /login msg" />
            <img src={sec8_img2} alt="update profile-" />

        </div>
        </div > 
        < div  id='commands' className='content_commands'>
            <div className='content_title'>Commands</div>
            <div className="content_conten">
                <div className="content_commands_table">
                <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align='center'>commands</TableCell>
                        <TableCell  align='center'>descriptions</TableCell>
                
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
               
                        >
                        <TableCell  align='center'>{row.name}</TableCell>
                        <TableCell  align='center'>{row.description}</TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </div>
                When you use these, they will return private messages for you to see only.

            </div>
        </div > 
        < div  id='work' className='content_work'>
            <div className='content_title'>What Works Well</div>
            <div className="content_content">

                 
            <ul className="cotent_list_plain">
                <li>AI reliably detects commitments in normal conversations</li>
                <li> Message classification (offer, request, completion) is accurate in common cases</li>
                <li>Threads are respected for context</li>
                <li>Badge system encourages recognition</li>
                <li>Channels create visibility and accountability</li>
            </ul>
            </div>
        </div > 
        < div  id='limitation' className='content_limitation'>
            <div className='content_title'>Known Limitations</div>
            <div className="content_content">
                <ul className="cotent_list_plain">
                    <li>Sometimes AI misses edge cases (e.g., vague phrases)</li>
                    <li>Natural language due dates may need correction</li>
                    <li>Duplicate onboarding DMs can occur if DB check fails</li>
                    <li>The action of creating a request to multiple people does not work yet, but this feature will be available in future updates</li>
                    <li>Mobile experience is inconsistent; needs UX testing</li>
                </ul>
            </div>
        </div > 
        < div id='faq' className='content_faq'>
            <div className='content_title'>Frequently Asked Questions (FAQ)</div>
            <div className="content_content">

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}

                        >
                    <Typography component="span">Does CommitBot track everything I say?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        No. It only listens in configured channels and only detects messages that match commitment patterns..
                    </Typography>
                    </AccordionDetails>
                </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography>What happens if I ignore a prompt?</Typography></AccordionSummary>
                <AccordionDetails><Typography>If you press Ignore, the suggestion won’t be tracked, and you’ll see a private confirmation. In some workspaces, ignored items may also appear in a “past commitments” channel for reference. CommitBot only continues to track items that you choose to formalize.</Typography></AccordionDetails>
            </Accordion>
    

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography>Can someone else complete a task for me?</Typography></AccordionSummary>
                <AccordionDetails><Typography>Yes. Both you (the committer) and the issuer can mark a task as complete. Usually, the committer marks it as “done,” but the issuer can also formalize completion if needed. Once a task is marked complete, only the issuer can approve the badge.</Typography></AccordionDetails>
            </Accordion>



    
            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography>Where do I see my commitments?</Typography></AccordionSummary>
                <AccordionDetails><Typography>Type /commitments in the CommitBot app or go to #commitbot-current-commitments to view your active commitments.</Typography></AccordionDetails>
            </Accordion>

        

            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography>Can I request a badge for a commitment that I made in Slack using SMS or WhatsApp?</Typography></AccordionSummary>
                <AccordionDetails><Typography>Technically yes, but it is not advisable since the commitment will still appear in your active commitments list in Slack. It will, however, be updated correctly in the ReliablyME platform. For the best experience, we recommend completing and requesting badges in Slack if the commitment was created there with CommitBot. This synchronization between Slack and the ReliablyME platform will be improved in subsequent versions of the CommitBot.</Typography></AccordionDetails>
            </Accordion>

    
             
             <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography>I said “finished” in #random and nothing happened. Why?</Typography></AccordionSummary>
                <AccordionDetails><Typography>That probably happened because you didn’t say “done” in the same thread as the original commitment. Saying it randomly in another channel won’t trigger anything. </Typography></AccordionDetails>
            </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography>Can I decline a badge?</Typography></AccordionSummary>
                <AccordionDetails><Typography>Yes. Use the Decline button when prompted. The promising party will be notified.</Typography></AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography>How do SMS alerts work?</Typography></AccordionSummary>
                <AccordionDetails><Typography>If you’ve logged in to ReliablyME outside of Slack, you’ll receive SMS or WhatsApp reminders as a backup. To get these reminders, you must verify your phone number.</Typography></AccordionDetails>
            </Accordion>

 </div>
        </div > 
        < div id='borader' className='content_borader'>
            <div className='content_title'>The Broader ReliablyME Platform</div>
            <div className="content_content">
        CommitBot is the Slack-based interface of the full ReliablyME platform, which supports:
        <br /><br />
       
        🌐 <span className="heavy">Web/Mobile dashboard:</span> 
        Track personal or team-wide reliability metrics.
        <br /><br />
        📊 <span className="heavy">Badging System:</span>
        Design, assign, and analyze custom digital badges.
        <br /><br />
        📱 <span className="heavy">Cross-platform nudging:</span>
        Via SMS or WhatsApp using Twilio integration.
        <br /><br />
        📂 <span className="heavy">Portfolio & credentials:</span>
        Build a shareable record of fulfilled commitments and social proof.

        🔗 Explore more at https://reliably.me</div>
        </div>
    </div>
  )
}

export default Content
