const QUESTIONS = [
  {
    "num": 1,
    "stem": "An RBT is working with a client who engages in hand-flapping. The BCBA asks the RBT to record every instance of hand-flapping during a 30-minute session. Which measurement procedure should the RBT use?",
    "options": [
      "Duration recording",
      "Frequency/event recording",
      "Whole interval recording",
      "Momentary time sampling"
    ],
    "correct": 1,
    "rationale": "B is correct. Frequency (event) recording involves counting each discrete occurrence of a behavior, which is appropriate when the behavior has a clear beginning and end and when the goal is to count every instance. A is incorrect because duration recording measures how long a behavior lasts, not how many times it occurs. C is incorrect because whole interval recording scores whether the behavior occurred throughout an entire interval, not every instance. D is incorrect because momentary time sampling only checks whether the behavior is occurring at the end of each interval, which would underestimate or miss occurrences.",
    "domain": "A",
    "domain_name": "Measurement"
  },
  {
    "num": 2,
    "stem": "An RBT is collecting data on how long a child engages in tantrum behavior from the moment the tantrum starts until it stops. Which type of measurement is the RBT using?",
    "options": [
      "Latency recording",
      "Frequency recording",
      "Duration recording",
      "Partial interval recording"
    ],
    "correct": 2,
    "rationale": "C is correct. Duration recording measures the total amount of time a behavior occurs from onset to offset, which is exactly what is described. A is incorrect because latency recording measures the time between a stimulus (like an instruction) and the onset of the behavior, not how long the behavior lasts. B is incorrect because frequency recording counts the number of occurrences, not the length of time. D is incorrect because partial interval recording only notes whether a behavior occurred at any point during an interval, and does not measure actual duration.",
    "domain": "A",
    "domain_name": "Measurement"
  },
  {
    "num": 3,
    "stem": "A BCBA asks an RBT to measure how long it takes a student to begin working on a task after the teacher gives the instruction. Which measurement procedure is most appropriate?",
    "options": [
      "Latency recording",
      "Inter-response time recording",
      "Duration recording",
      "Frequency recording"
    ],
    "correct": 0,
    "rationale": "A is correct. Latency recording measures the elapsed time between a stimulus (the teacher's instruction) and the initiation of the response (beginning to work). B is incorrect because inter-response time (IRT) measures the time between two consecutive occurrences of the same behavior, not between a stimulus and a response. C is incorrect because duration recording measures how long a behavior lasts once it starts, not the delay before it begins. D is incorrect because frequency recording counts the number of times a behavior occurs, which is unrelated to response time.",
    "domain": "A",
    "domain_name": "Measurement"
  },
  {
    "num": 4,
    "stem": "An RBT is observing a student during a 20-minute independent work period. The RBT divides the time into 1-minute intervals and records whether the student is on-task at the exact moment each interval ends. What type of recording is this?",
    "options": [
      "Whole interval recording",
      "Partial interval recording",
      "Momentary time sampling",
      "Continuous recording"
    ],
    "correct": 2,
    "rationale": "C is correct. Momentary time sampling (MTS) involves observing only at the end of each interval and recording whether the behavior is occurring at that exact moment. A is incorrect because whole interval recording requires the behavior to occur throughout the entire interval, not just at one moment. B is incorrect because partial interval recording scores whether the behavior occurred at any point during the interval, requiring observation throughout the interval. D is incorrect because continuous recording tracks every instance of the behavior, not just at specific time points.",
    "domain": "A",
    "domain_name": "Measurement"
  },
  {
    "num": 5,
    "stem": "An RBT completed a session and is entering data into the client's data tracking system. The RBT realizes they forgot to record data for one of the target behaviors during the session. What should the RBT do?",
    "options": [
      "Estimate the data based on memory and enter it into the system",
      "Leave the data field blank and inform the supervisor",
      "Copy data from the previous session to fill in the gap",
      "Ask a colleague who was not present to estimate the data"
    ],
    "correct": 1,
    "rationale": "B is correct. When data is missed, the RBT should not fabricate or estimate data. The appropriate action is to leave the field blank (or note that data was not collected) and inform the supervisor so they are aware of the gap. A is incorrect because estimating data from memory is unreliable and could lead to inaccurate clinical decisions. C is incorrect because copying previous session data is falsifying records and misrepresents the client's current performance. D is incorrect because a colleague who was not present cannot provide accurate data for that session.",
    "domain": "A",
    "domain_name": "Measurement"
  },
  {
    "num": 6,
    "stem": "An RBT is collecting data on a client's completed math worksheets at the end of each session. Which type of measurement is the RBT using?",
    "options": [
      "Frequency recording",
      "Permanent product recording",
      "Duration recording",
      "Whole interval recording"
    ],
    "correct": 1,
    "rationale": "B is correct. Permanent product recording involves measuring the tangible outcomes or products of a behavior (completed worksheets) rather than directly observing the behavior as it occurs. A is incorrect because frequency recording involves counting each instance of a behavior as it occurs in real time, not after the fact by examining products. C is incorrect because duration recording measures how long a behavior lasts. D is incorrect because whole interval recording is a time-based observation method, not a product-based one.",
    "domain": "A",
    "domain_name": "Measurement"
  },
  {
    "num": 7,
    "stem": "An RBT is graphing data for a client's target behavior. The BCBA instructs the RBT to plot the number of correct responses on the vertical axis and the session number on the horizontal axis. Which component of a graph does the vertical axis represent?",
    "options": [
      "The independent variable",
      "The dependent variable",
      "The phase change line",
      "The trend line"
    ],
    "correct": 1,
    "rationale": "B is correct. The vertical axis (y-axis) of a graph represents the dependent variable, which is the behavior being measured (in this case, the number of correct responses). A is incorrect because the independent variable (the intervention or condition) is typically represented by phase labels or condition changes, not the y-axis. C is incorrect because a phase change line is a vertical dashed line indicating a change in conditions, not an axis. D is incorrect because a trend line is drawn through data points to show the direction of change, not an axis component.",
    "domain": "A",
    "domain_name": "Measurement"
  },
  {
    "num": 8,
    "stem": "During a session, an RBT divides a 10-minute observation into 30-second intervals. If the target behavior occurs at any point during an interval, the RBT marks that interval as having the behavior. Which recording method is this?",
    "options": [
      "Momentary time sampling",
      "Whole interval recording",
      "Partial interval recording",
      "Event recording"
    ],
    "correct": 2,
    "rationale": "C is correct. Partial interval recording involves dividing an observation period into intervals and recording whether the behavior occurred at any point during each interval. If the behavior happens at all during the interval, it is scored as occurring. A is incorrect because momentary time sampling only checks if the behavior is happening at the exact end of each interval. B is incorrect because whole interval recording requires the behavior to occur throughout the entire interval to be scored. D is incorrect because event recording counts every discrete instance of the behavior without using intervals.",
    "domain": "A",
    "domain_name": "Measurement"
  },
  {
    "num": 9,
    "stem": "A BCBA asks an RBT to conduct a paired stimulus preference assessment with a client. What does this involve?",
    "options": [
      "Presenting all available items at once and recording which one the client selects first",
      "Presenting two items at a time and recording which item the client selects from each pair",
      "Asking the client's caregiver to rank the client's preferred items from most to least preferred",
      "Allowing the client free access to all items and recording how long they engage with each"
    ],
    "correct": 1,
    "rationale": "B is correct. A paired stimulus (or forced-choice) preference assessment involves systematically presenting two items at a time and recording which item the client selects from each pair. Each item is paired with every other item. A is incorrect because presenting all items at once describes a multiple stimulus preference assessment (MSWO or MS), not a paired stimulus assessment. C is incorrect because asking a caregiver to rank items is an indirect preference assessment (such as a reinforcer survey), not a paired stimulus assessment. D is incorrect because allowing free access and recording engagement time describes a free operant preference assessment.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 10,
    "stem": "An RBT is assisting with a preference assessment. The client consistently chooses the same item regardless of its position (left or right). What should the RBT do?",
    "options": [
      "Remove the preferred item from the assessment entirely",
      "Ensure the items are rotated in position across trials as part of the standard procedure",
      "Conclude the assessment and report the item as the most preferred",
      "Replace all other items with new ones to test if the preference changes"
    ],
    "correct": 1,
    "rationale": "B is correct. In a properly conducted preference assessment, items should be rotated in position (left/right) across trials to control for position bias. If the client consistently picks the item on one side regardless of what it is, position rotation helps identify whether the client truly prefers that specific item or simply has a side preference. A is incorrect because removing the preferred item would eliminate important data about the client's hierarchy. C is incorrect because concluding the assessment prematurely without controlling for position bias may lead to inaccurate results. D is incorrect because replacing items is not the standard response to a potential position bias.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 11,
    "stem": "An RBT observes that a child consistently tantrums when asked to complete difficult math problems, and the tantrum stops when the math problems are removed. Which function of behavior does this most likely represent?",
    "options": [
      "Access to attention",
      "Access to tangibles",
      "Escape/avoidance",
      "Automatic reinforcement"
    ],
    "correct": 2,
    "rationale": "C is correct. When a behavior occurs in the presence of demands and results in the removal of those demands, the behavior is likely maintained by negative reinforcement in the form of escape or avoidance. The child tantrums to escape the difficult math task. A is incorrect because attention-maintained behavior typically occurs when attention is diverted or absent, not specifically when demands are presented. B is incorrect because tangible-maintained behavior involves gaining access to preferred items or activities. D is incorrect because automatically reinforced behavior is maintained by internal sensory stimulation and would not be specifically linked to the presentation or removal of demands.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 12,
    "stem": "An RBT is helping the BCBA gather information for a functional behavior assessment. The BCBA asks the RBT to complete an ABC data collection form. What does ABC stand for?",
    "options": [
      "Assessment, Behavior, Consequence",
      "Antecedent, Behavior, Consequence",
      "Antecedent, Baseline, Condition",
      "Analysis, Behavior, Contingency"
    ],
    "correct": 1,
    "rationale": "B is correct. ABC stands for Antecedent (what happens before the behavior), Behavior (the specific behavior observed), and Consequence (what happens after the behavior). This is a descriptive assessment tool used to identify patterns related to the function of behavior. A is incorrect because the 'A' stands for Antecedent, not Assessment. C is incorrect because 'B' stands for Behavior, not Baseline, and 'C' stands for Consequence, not Condition. D is incorrect because the 'A' stands for Antecedent, not Analysis, and 'C' stands for Consequence, not Contingency.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 13,
    "stem": "During a multiple stimulus without replacement (MSWO) preference assessment, the client selects an item. What should the RBT do next?",
    "options": [
      "Return the selected item to the array and re-present all items",
      "Remove the selected item from the array and re-present the remaining items",
      "End the trial and begin a new assessment with different items",
      "Allow the client to keep the item for the rest of the session"
    ],
    "correct": 1,
    "rationale": "B is correct. In an MSWO preference assessment, once the client selects an item, that item is removed from the array. The remaining items are then rearranged and re-presented so the client can select from the remaining options. This continues until all items have been selected or the client does not select any remaining items. A is incorrect because returning the selected item describes a multiple stimulus with replacement (MSW) procedure, not MSWO. C is incorrect because the assessment continues with the remaining items rather than ending after one selection. D is incorrect because the item is briefly accessed and then removed from future trials in that round.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 14,
    "stem": "A client's behavior plan states that the function of the client's screaming is access to attention. During a session, the client begins screaming while the RBT is working with another client. Based on the identified function, what is most likely the antecedent for this behavior?",
    "options": [
      "The client was asked to complete a difficult task",
      "The RBT's attention was directed away from the client",
      "A preferred toy was taken away from the client",
      "The client is experiencing an internal sensory need"
    ],
    "correct": 1,
    "rationale": "B is correct. Since the function of the screaming is access to attention, the antecedent that triggers the behavior is likely a situation where the client is not receiving attention — in this case, the RBT's attention being directed to another client. A is incorrect because a difficult task as an antecedent would be more consistent with an escape function. C is incorrect because removal of a preferred item would be more consistent with a tangible function. D is incorrect because an internal sensory need would be associated with automatic reinforcement, not attention.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 15,
    "stem": "An RBT is conducting a free operant preference assessment. Which of the following best describes this procedure?",
    "options": [
      "The RBT presents two items at a time and records which one the client selects",
      "The RBT asks the caregiver to list the client's favorite items and activities",
      "The RBT provides access to a variety of items and activities and records which ones the client engages with and for how long",
      "The RBT presents an array of items, removes the selected item, and re-presents the remaining items"
    ],
    "correct": 2,
    "rationale": "C is correct. A free operant preference assessment involves providing the client with free access to a variety of items and activities while the observer records which items the client interacts with and the duration of engagement. This helps identify potential reinforcers in a naturalistic way. A is incorrect because presenting two items at a time describes a paired stimulus assessment. B is incorrect because asking the caregiver describes an indirect assessment method such as a reinforcer survey. D is incorrect because this describes a multiple stimulus without replacement (MSWO) assessment.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 16,
    "stem": "An RBT is assisting a BCBA with an indirect functional assessment. Which of the following is an example of an indirect assessment method?",
    "options": [
      "Conducting an ABC observation during the client's school day",
      "Interviewing the client's teacher about when the problem behavior occurs",
      "Systematically manipulating environmental variables to test behavior functions",
      "Recording antecedents and consequences in real time during a session"
    ],
    "correct": 1,
    "rationale": "B is correct. Indirect assessment methods gather information about behavior through interviews, questionnaires, rating scales, and record reviews rather than direct observation. Interviewing the teacher is an indirect method. A is incorrect because ABC observation is a direct (descriptive) assessment method that involves observing the behavior in real time. C is incorrect because systematically manipulating environmental variables describes a functional analysis, which is an experimental assessment. D is incorrect because recording antecedents and consequences in real time is a direct observation method.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 17,
    "stem": "An RBT notices that a client frequently bites their own hand when alone with no one else present and no demands or tasks have been given. Based on this observation, which function of behavior is most likely?",
    "options": [
      "Access to attention",
      "Escape from demands",
      "Access to tangibles",
      "Automatic reinforcement"
    ],
    "correct": 3,
    "rationale": "D is correct. When a behavior occurs even when the individual is alone, with no social consequences (no attention, no escape from demands, no access to tangibles), the behavior is likely maintained by automatic reinforcement — meaning the behavior itself produces sensory stimulation that is reinforcing. A is incorrect because attention-maintained behavior would require someone present to provide attention. B is incorrect because escape-maintained behavior requires the presence of demands or aversive stimuli. C is incorrect because tangible-maintained behavior requires restricted access to a preferred item.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 18,
    "stem": "A BCBA asks an RBT to assist with conducting a preference assessment for a nonverbal client. The client has limited motor skills. Which type of preference assessment would be MOST appropriate?",
    "options": [
      "A verbal choice preference assessment where the client states their preference",
      "A multiple stimulus without replacement assessment requiring the client to reach for items",
      "An approach-based assessment adapted so the client can indicate preference through eye gaze",
      "A written survey completed by the client"
    ],
    "correct": 2,
    "rationale": "C is correct. For a client who is nonverbal and has limited motor skills, an approach-based assessment adapted to use eye gaze or other accessible response forms allows the client to indicate preferences despite their physical limitations. A is incorrect because a verbal choice assessment requires the client to speak, which is not possible for a nonverbal client. B is incorrect because requiring the client to reach for items may not be feasible given the client's limited motor skills. D is incorrect because a written survey requires literacy and motor skills that the client may not possess.",
    "domain": "B",
    "domain_name": "Assessment"
  },
  {
    "num": 19,
    "stem": "An RBT is teaching a child to request preferred items using a picture exchange system. The RBT presents a preferred item, waits for the child to hand over the corresponding picture card, and then immediately delivers the item. Which skill acquisition procedure is the RBT implementing?",
    "options": [
      "Discrete trial teaching",
      "Naturalistic teaching",
      "Mand training",
      "Tact training"
    ],
    "correct": 2,
    "rationale": "C is correct. Mand training involves teaching a client to make requests (mands) for preferred items or activities. The child is motivated by wanting the item and uses the picture card to request it, which is a mand — a verbal operant controlled by motivation and reinforced by receiving the specific item requested. A is incorrect because while discrete trial teaching (DTT) could be the format used, the specific skill being taught is manding. The question asks about the skill acquisition procedure, not the teaching format. B is incorrect because naturalistic teaching occurs in the natural environment with child-initiated interactions, not in a structured exchange format. D is incorrect because tact training involves labeling or naming items in the environment, not requesting them.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 20,
    "stem": "An RBT is conducting a discrete trial with a student. The RBT presents a picture of a dog and says, 'What is this?' The student says 'Dog,' and the RBT provides praise and a small treat. Which component of the discrete trial served as the discriminative stimulus (SD)?",
    "options": [
      "The praise and treat",
      "The student's response 'Dog'",
      "The presentation of the picture and the question 'What is this?'",
      "The inter-trial interval"
    ],
    "correct": 2,
    "rationale": "C is correct. The discriminative stimulus (SD) is the stimulus that signals the availability of reinforcement for a specific response. In this trial, the picture of the dog combined with the question 'What is this?' serves as the SD that occasions the student's response. A is incorrect because the praise and treat are the consequence (reinforcement), not the antecedent stimulus. B is incorrect because the student's response is the behavior, not the discriminative stimulus. D is incorrect because the inter-trial interval is the brief pause between trials, not a stimulus that occasions a response.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 21,
    "stem": "An RBT is using a most-to-least prompting hierarchy to teach a child to wash their hands. On the first trial, the RBT provides full physical guidance. Over subsequent trials, the RBT gradually reduces the level of physical assistance. What is this process called?",
    "options": [
      "Prompt fading",
      "Stimulus fading",
      "Shaping",
      "Chaining"
    ],
    "correct": 0,
    "rationale": "A is correct. Prompt fading is the systematic reduction of prompts over time to transfer stimulus control from the prompt to the natural discriminative stimulus. In most-to-least prompting, you start with the most intrusive prompt and gradually fade to less intrusive prompts. B is incorrect because stimulus fading involves gradually changing the physical properties of a stimulus (such as size, color, or intensity) to transfer stimulus control, not reducing prompts. C is incorrect because shaping involves reinforcing successive approximations of a target behavior. D is incorrect because chaining involves linking individual behaviors together in a sequence to form a complex skill.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 22,
    "stem": "A BCBA writes a program that involves teaching a child to brush their teeth by first teaching the last step independently (putting the toothbrush away) while providing full assistance for all prior steps. Once the child masters the last step, the second-to-last step is taught independently, and so on. Which procedure is this?",
    "options": [
      "Forward chaining",
      "Backward chaining",
      "Total task chaining",
      "Shaping"
    ],
    "correct": 1,
    "rationale": "B is correct. Backward chaining involves teaching the last step of a task analysis first while providing assistance for all preceding steps. Once the last step is mastered, the second-to-last step is taught, and so on, until the entire chain is performed independently. A is incorrect because forward chaining teaches the first step independently first, then the second step, and so on. C is incorrect because total task chaining involves practicing every step of the task during each session, with prompts provided as needed for any step. D is incorrect because shaping involves reinforcing successive approximations of a single behavior, not linking steps in a sequence.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 23,
    "stem": "An RBT is working with a client on tacting (labeling) common objects. The client correctly labels a 'cup' at the clinic table. However, when shown a different cup at the client's home, the client does not respond. What skill is the client lacking?",
    "options": [
      "Maintenance",
      "Generalization",
      "Fluency",
      "Discrimination"
    ],
    "correct": 1,
    "rationale": "B is correct. Generalization refers to the ability to perform a learned skill across different stimuli (different cups), settings (clinic vs. home), and people. The client can label one cup but not a different cup in a different setting, indicating a lack of stimulus generalization. A is incorrect because maintenance refers to performing a skill over time after training has ended, not across different stimuli or settings. C is incorrect because fluency refers to the speed and accuracy of responding, not the ability to respond in new contexts. D is incorrect because discrimination involves responding differently to different stimuli, which is the opposite of what is needed here.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 24,
    "stem": "An RBT is using a token economy with a client. The client earns tokens for completing tasks and can exchange them for a preferred activity at the end of the session. The tokens function as what type of reinforcer?",
    "options": [
      "Unconditioned reinforcer",
      "Conditioned reinforcer",
      "Automatic reinforcer",
      "Negative reinforcer"
    ],
    "correct": 1,
    "rationale": "B is correct. Tokens are conditioned (secondary) reinforcers because they acquire their reinforcing value through repeated pairing with other reinforcers (backup reinforcers) such as the preferred activity. Tokens are not inherently reinforcing. A is incorrect because unconditioned reinforcers are those that are naturally reinforcing without prior learning (e.g., food, water, warmth). Tokens must be learned to have value. C is incorrect because automatic reinforcement refers to behavior that produces its own sensory reinforcement, not to a token system. D is incorrect because negative reinforcement involves the removal of an aversive stimulus to increase behavior, which does not describe how tokens function.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 25,
    "stem": "An RBT is teaching a child to say 'ball' by first reinforcing 'ba,' then 'bal,' and finally 'ball.' Which procedure is the RBT using?",
    "options": [
      "Chaining",
      "Shaping",
      "Prompt fading",
      "Discrimination training"
    ],
    "correct": 1,
    "rationale": "B is correct. Shaping involves reinforcing successive approximations toward a target behavior. The RBT starts by reinforcing a response that resembles the target ('ba'), then requires a closer approximation ('bal'), and finally the full target behavior ('ball'). A is incorrect because chaining links together a series of discrete steps in a task analysis, not successive approximations of a single response. C is incorrect because prompt fading involves systematically reducing prompts, not reinforcing closer approximations. D is incorrect because discrimination training involves teaching a client to respond differently in the presence of different stimuli.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 26,
    "stem": "During a teaching session, an RBT delivers a prompt simultaneously with the instruction to ensure the client responds correctly on the first trial. What type of prompting procedure is this?",
    "options": [
      "Least-to-most prompting",
      "Time delay prompting",
      "Errorless learning (0-second prompt delay)",
      "Most-to-least prompting"
    ],
    "correct": 2,
    "rationale": "C is correct. Errorless learning with a 0-second prompt delay involves delivering the prompt at the same time as the instruction (no delay between the SD and the prompt), ensuring the client responds correctly without errors. A is incorrect because least-to-most prompting starts with the least intrusive prompt and increases only if the client does not respond correctly, allowing for errors. B is incorrect because time delay involves waiting a set period after the instruction before delivering the prompt, giving the client a chance to respond independently. D is incorrect because most-to-least prompting starts with the most intrusive prompt but typically includes a brief opportunity for independent responding before the prompt is given.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 27,
    "stem": "An RBT is teaching a client to identify colors. The RBT places a red card and a blue card on the table and says, 'Touch red.' The client touches the red card and receives praise. What type of training is this?",
    "options": [
      "Tact training",
      "Mand training",
      "Listener responding (receptive identification)",
      "Echoic training"
    ],
    "correct": 2,
    "rationale": "C is correct. Listener responding (also called receptive identification) involves the client responding to another person's verbal instruction by selecting or identifying the correct item. The client is not producing a verbal response but is demonstrating comprehension by touching the correct item. A is incorrect because tact training involves the client labeling stimuli (e.g., saying 'red' when shown a red card). B is incorrect because mand training involves teaching the client to request items. D is incorrect because echoic training involves the client repeating what someone else says.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 28,
    "stem": "An RBT is implementing a natural environment teaching (NET) procedure. During free play, the child reaches for a toy car on a high shelf. The RBT says, 'What do you want?' The child says, 'Car,' and the RBT hands the child the toy car. Which element best distinguishes this from discrete trial teaching (DTT)?",
    "options": [
      "The RBT provides a consequence after the response",
      "The teaching occurs during a naturally occurring situation initiated by the child's motivation",
      "The RBT uses a discriminative stimulus",
      "The child receives reinforcement"
    ],
    "correct": 1,
    "rationale": "B is correct. The key distinction of naturalistic or natural environment teaching (NET) is that teaching opportunities arise from the child's natural motivation and interests in the moment, rather than being pre-planned by the instructor. A is incorrect because both NET and DTT involve delivering consequences after responses. C is incorrect because both NET and DTT use discriminative stimuli. D is incorrect because reinforcement is delivered in both approaches; however, in NET the reinforcer is directly related to the child's motivation (the actual toy car), whereas in DTT the reinforcer may be contrived.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 29,
    "stem": "An RBT is using a gestural prompt to help a child learn to sort objects by color. Which of the following is an example of a gestural prompt?",
    "options": [
      "The RBT physically guides the child's hand to place the object in the correct bin",
      "The RBT points toward the correct color bin",
      "The RBT says, 'Put the red one in the red bin'",
      "The RBT demonstrates sorting an object into the correct bin"
    ],
    "correct": 1,
    "rationale": "B is correct. A gestural prompt involves a physical gesture, such as pointing, nodding, or motioning, to direct the client toward the correct response. Pointing toward the correct bin is a gestural prompt. A is incorrect because physically guiding the child's hand is a physical prompt. C is incorrect because telling the child where to put the object is a verbal prompt. D is incorrect because demonstrating the correct response is a model prompt.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 30,
    "stem": "An RBT has been teaching a client to tie their shoes for several weeks. The BCBA now asks the RBT to probe whether the client can still tie their shoes without any additional teaching sessions. What concept is the BCBA assessing?",
    "options": [
      "Generalization across settings",
      "Fluency",
      "Maintenance",
      "Stimulus control"
    ],
    "correct": 2,
    "rationale": "C is correct. Maintenance refers to the extent to which a learned behavior continues to occur after teaching has been discontinued. By probing whether the client can still perform the skill without additional instruction, the BCBA is assessing maintenance. A is incorrect because generalization across settings would involve checking if the skill occurs in new environments, not whether it persists over time. B is incorrect because fluency refers to the accuracy and speed of a behavior. D is incorrect because stimulus control refers to whether a behavior occurs in the presence of specific stimuli, not whether it persists over time.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 31,
    "stem": "An RBT is working with a child who echoes everything said to them. The BCBA designs a program to bring the echoic responses under appropriate stimulus control. The RBT says 'Say cat' and the child says 'cat.' Which verbal operant is being demonstrated?",
    "options": [
      "Mand",
      "Tact",
      "Echoic",
      "Intraverbal"
    ],
    "correct": 2,
    "rationale": "C is correct. An echoic is a verbal operant in which the speaker repeats what another person has said. The child hears 'cat' and repeats 'cat,' making this an echoic response. A is incorrect because a mand is a request motivated by a want or need, not a repetition. B is incorrect because a tact is a label of something in the environment (e.g., seeing a cat and saying 'cat'). D is incorrect because an intraverbal is a verbal response controlled by another person's verbal behavior where the response does not match the stimulus (e.g., hearing 'What animal says meow?' and saying 'cat').",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 32,
    "stem": "An RBT is implementing a progressive time delay procedure. On the first few trials, the prompt is delivered immediately after the instruction (0-second delay). On subsequent trials, the delay between the instruction and the prompt is gradually increased. What is the primary goal of this procedure?",
    "options": [
      "To increase the speed of the client's response",
      "To transfer stimulus control from the prompt to the natural SD",
      "To shape new forms of the target behavior",
      "To increase the client's tolerance for waiting"
    ],
    "correct": 1,
    "rationale": "B is correct. The primary goal of a time delay procedure is to transfer stimulus control from the prompt to the natural discriminative stimulus (SD). By gradually increasing the delay before the prompt, the client has an opportunity to respond independently to the SD before the prompt is provided. A is incorrect because increasing response speed is a fluency goal, not the purpose of time delay. C is incorrect because shaping involves reinforcing successive approximations of a behavior, not adjusting prompt timing. D is incorrect because building tolerance for waiting is not the purpose of this procedure; the delay gives the client a chance to respond independently.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 33,
    "stem": "An RBT is teaching a child to answer social questions. The RBT asks, 'What is your name?' and the child responds with their name. This is an example of which verbal operant?",
    "options": [
      "Echoic",
      "Mand",
      "Tact",
      "Intraverbal"
    ],
    "correct": 3,
    "rationale": "D is correct. An intraverbal is a verbal response that is controlled by another person's verbal behavior, where the response does not match the verbal stimulus. The child hears a question ('What is your name?') and responds with a different word (their name), making this an intraverbal. A is incorrect because an echoic involves repeating the verbal stimulus, which would mean the child says 'What is your name?' B is incorrect because a mand is a request driven by motivation, not a response to a question. C is incorrect because a tact is a label of a nonverbal stimulus in the environment (e.g., seeing an object and naming it).",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 34,
    "stem": "An RBT is teaching a child to make their bed using a task analysis. Each morning, the RBT has the child attempt every step of the task, providing prompts as needed for steps the child has not yet mastered. Which chaining procedure is this?",
    "options": [
      "Forward chaining",
      "Backward chaining",
      "Total task chaining",
      "Behavior chain interruption"
    ],
    "correct": 2,
    "rationale": "C is correct. Total task chaining (also called whole task presentation) involves the learner attempting every step of the task analysis during each session, with prompts provided for steps that are not yet mastered. A is incorrect because forward chaining teaches only the first step independently and provides assistance for all remaining steps until the first step is mastered. B is incorrect because backward chaining teaches only the last step independently first. D is incorrect because behavior chain interruption involves interrupting a well-established chain to prompt a new behavior (such as a communication response).",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 35,
    "stem": "An RBT delivers a highly preferred edible item immediately after the client correctly completes a task. Over time, the RBT begins delivering the edible after every other correct response, then every third correct response. What schedule-thinning process is occurring?",
    "options": [
      "Changing from a fixed ratio to a variable ratio schedule",
      "Thinning from continuous reinforcement (CRF) to an intermittent schedule",
      "Implementing differential reinforcement",
      "Fading the reinforcer"
    ],
    "correct": 1,
    "rationale": "B is correct. Moving from delivering reinforcement after every correct response (continuous reinforcement or CRF) to delivering it after every second or third response (intermittent schedule) is called schedule thinning. This helps maintain the behavior while making the reinforcement schedule more practical and sustainable. A is incorrect because the description does not specify fixed vs. variable; it describes thinning from CRF. C is incorrect because differential reinforcement involves reinforcing one behavior while withholding reinforcement for another. D is incorrect because fading the reinforcer would involve reducing its intensity or magnitude, not changing the schedule.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 36,
    "stem": "An RBT is teaching a child to imitate actions. The RBT claps their hands and says, 'Do this.' The child claps their hands and receives reinforcement. What type of prompt is the RBT using?",
    "options": [
      "Verbal prompt",
      "Gestural prompt",
      "Model prompt",
      "Physical prompt"
    ],
    "correct": 2,
    "rationale": "C is correct. A model prompt involves demonstrating the desired behavior for the client to imitate. The RBT claps their hands to show the child what to do, which serves as a model. A is incorrect because a verbal prompt involves spoken instructions or hints (e.g., 'Clap your hands'). While the RBT says 'Do this,' the primary prompt is the demonstration. B is incorrect because a gestural prompt involves pointing or motioning toward the correct response, not demonstrating the full action. D is incorrect because a physical prompt involves physically guiding the client's body through the response.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 37,
    "stem": "An RBT is using a least-to-most prompting hierarchy. What is the correct order of prompts in this hierarchy?",
    "options": [
      "Full physical, partial physical, model, gestural, independent",
      "Independent opportunity, gestural, model, partial physical, full physical",
      "Verbal, visual, gestural, model, physical",
      "Independent, verbal, model, full physical, partial physical"
    ],
    "correct": 1,
    "rationale": "B is correct. In a least-to-most prompting hierarchy, the client is first given an opportunity to respond independently. If the client does not respond correctly, prompts are provided starting with the least intrusive (gestural) and progressively moving to more intrusive prompts (model, partial physical, full physical) until the client responds correctly. A is incorrect because this describes a most-to-least hierarchy (starting with the most intrusive prompt). C is incorrect because while it lists some prompt types, the order and inclusion of prompts is not standard. D is incorrect because partial physical should come before full physical, not after.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 38,
    "stem": "An RBT notices that a client who learned to request 'juice' at the therapy table now also requests 'juice' at home and at school. This is an example of:",
    "options": [
      "Stimulus discrimination",
      "Response generalization",
      "Stimulus generalization",
      "Maintenance"
    ],
    "correct": 2,
    "rationale": "C is correct. Stimulus generalization occurs when a behavior learned in the presence of one stimulus (therapy table) also occurs in the presence of other similar stimuli or settings (home, school) without additional training. A is incorrect because stimulus discrimination would involve the client responding differently in the presence of different stimuli, which is the opposite of generalization. B is incorrect because response generalization involves the emergence of untrained responses (different forms of the behavior), not performing the same response in new settings. D is incorrect because maintenance refers to the behavior continuing over time, not across settings.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 39,
    "stem": "An RBT is implementing behavior skills training (BST) to teach a parent how to use a prompting procedure. Which of the following represents the correct sequence of BST components?",
    "options": [
      "Practice, instruction, modeling, feedback",
      "Instruction, modeling, rehearsal, feedback",
      "Modeling, feedback, instruction, rehearsal",
      "Feedback, instruction, practice, modeling"
    ],
    "correct": 1,
    "rationale": "B is correct. Behavior skills training (BST) follows the sequence: Instruction (describing the skill), Modeling (demonstrating the skill), Rehearsal (the learner practices the skill), and Feedback (providing corrective and positive feedback on the learner's performance). A is incorrect because practice should come after modeling, not before instruction. C is incorrect because modeling should come after instruction, and feedback should come after rehearsal. D is incorrect because feedback should come last, not first.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 40,
    "stem": "An RBT is implementing a program where the client earns stickers for completing tasks and can trade in 5 stickers for 10 minutes of tablet time. What type of reinforcement system is this?",
    "options": [
      "Continuous reinforcement schedule",
      "Token economy",
      "Premack principle",
      "Contingency contract"
    ],
    "correct": 1,
    "rationale": "B is correct. A token economy is a reinforcement system where tokens (stickers) are earned for performing target behaviors and can later be exchanged for backup reinforcers (tablet time). A is incorrect because continuous reinforcement means delivering reinforcement after every instance of the behavior, not using a token exchange system. C is incorrect because the Premack principle involves using a high-probability behavior to reinforce a low-probability behavior (e.g., 'First finish your work, then you can play'), without a token exchange system. D is incorrect because a contingency contract is a written agreement between parties specifying the behavior and its consequences, not a token exchange system.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 41,
    "stem": "A child who has learned to say 'doggy' when seeing a dog now also says 'doggy' when seeing a cat for the first time. What process does this illustrate?",
    "options": [
      "Stimulus discrimination",
      "Stimulus generalization (overgeneralization)",
      "Response generalization",
      "Spontaneous recovery"
    ],
    "correct": 1,
    "rationale": "B is correct. This is an example of stimulus generalization, specifically overgeneralization, where the child responds to a similar but different stimulus (cat) the same way they respond to the trained stimulus (dog). The child has not yet learned to discriminate between dogs and cats. A is incorrect because stimulus discrimination would involve the child correctly responding differently to dogs versus cats. C is incorrect because response generalization involves producing untrained response forms, not responding to untrained stimuli. D is incorrect because spontaneous recovery refers to the reappearance of a previously extinguished behavior.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 42,
    "stem": "An RBT is teaching a child to label the color 'red.' The RBT holds up a red card and says, 'What color?' The child says, 'Red,' and receives praise. Which verbal operant is being targeted?",
    "options": [
      "Mand",
      "Tact",
      "Intraverbal",
      "Echoic"
    ],
    "correct": 1,
    "rationale": "B is correct. A tact is a verbal operant in which the speaker labels or names something they can see, hear, smell, taste, or touch in their environment. The child sees a red card and labels it 'red,' which is a tact. A is incorrect because a mand is a request for something the speaker wants. C is incorrect because an intraverbal is a verbal response to another person's verbal behavior where the response does not match (e.g., answering a question like 'What color is the sky?'). In this case, the primary controlling variable is the nonverbal stimulus (the red card), making it a tact. D is incorrect because an echoic involves repeating what someone else said.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 43,
    "stem": "An RBT is teaching a child to match identical pictures. The RBT places three pictures on the table and hands the child a picture that matches one of them. The child correctly places it on the matching picture. This is an example of:",
    "options": [
      "Identity matching (matching-to-sample)",
      "Arbitrary matching",
      "Receptive identification",
      "Tact training"
    ],
    "correct": 0,
    "rationale": "A is correct. Identity matching (or identity matching-to-sample) involves matching identical stimuli. The child is given a sample stimulus and must select the comparison stimulus that looks exactly the same. B is incorrect because arbitrary matching involves matching stimuli that are not physically identical (e.g., matching a picture of a dog to the written word 'dog'). C is incorrect because receptive identification involves selecting an item in response to a verbal label (e.g., 'Touch the dog'). D is incorrect because tact training involves labeling stimuli verbally, not matching them.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 44,
    "stem": "An RBT uses visual supports such as a picture schedule to help a client transition between activities throughout the day. Partway through the schedule, the client begins engaging in a problem behavior. The RBT redirects the client to the visual schedule and points to the next activity. The visual schedule is functioning as what type of support?",
    "options": [
      "A discriminative stimulus for the next activity",
      "A punisher for the problem behavior",
      "A reinforcer for transitioning",
      "An extinction procedure"
    ],
    "correct": 0,
    "rationale": "A is correct. The visual schedule serves as a discriminative stimulus (SD) that signals what activity comes next and occasions the appropriate transition behavior. By redirecting the client to the schedule, the RBT is helping the client respond to the SD rather than engaging in problem behavior. B is incorrect because the schedule is not being presented as a consequence to reduce problem behavior; it is an antecedent support. C is incorrect because the schedule itself is not a reinforcer — it provides information about what is happening next. D is incorrect because extinction involves withholding reinforcement for a behavior, which is not what is occurring here.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 45,
    "stem": "During a teaching session, an RBT provides the instruction 'Touch your nose.' The client does not respond after 5 seconds. The RBT then provides a model by touching their own nose. The client imitates and touches their nose. The RBT provides praise. On the next trial, the client touches their nose independently after the instruction. What happened?",
    "options": [
      "The prompt was faded using a most-to-least hierarchy",
      "The client demonstrated stimulus generalization",
      "Transfer of stimulus control occurred from the model prompt to the verbal instruction",
      "The client demonstrated response generalization"
    ],
    "correct": 2,
    "rationale": "C is correct. Transfer of stimulus control occurred when the client's response shifted from being controlled by the model prompt (the RBT demonstrating) to being controlled by the natural discriminative stimulus (the verbal instruction 'Touch your nose'). A is incorrect because most-to-least prompting starts with the most intrusive prompt; in this scenario, a model prompt was used after the client did not respond, which is more consistent with least-to-most or a time delay approach. B is incorrect because stimulus generalization involves responding in new settings or to new stimuli, not shifting from prompted to independent responding. D is incorrect because response generalization involves performing untrained variations of a response.",
    "domain": "C",
    "domain_name": "Skill Acquisition"
  },
  {
    "num": 46,
    "stem": "A client's behavior intervention plan (BIP) specifies that the RBT should provide attention every 2 minutes regardless of whether the problem behavior is occurring. This is an example of which antecedent-based intervention?",
    "options": [
      "Differential reinforcement of other behavior (DRO)",
      "Noncontingent reinforcement (NCR)",
      "Differential reinforcement of alternative behavior (DRA)",
      "High-probability instructional sequence"
    ],
    "correct": 1,
    "rationale": "B is correct. Noncontingent reinforcement (NCR) involves delivering the reinforcer (attention) on a fixed-time schedule regardless of the client's behavior. The reinforcer is provided independently of whether the problem behavior or any specific appropriate behavior is occurring. A is incorrect because DRO involves delivering reinforcement when the problem behavior has NOT occurred for a specified period, which is contingent on the absence of behavior. C is incorrect because DRA involves reinforcing a specific alternative behavior that serves the same function as the problem behavior. D is incorrect because a high-probability instructional sequence involves presenting a series of easy requests before a difficult one to build momentum.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 47,
    "stem": "A BCBA instructs an RBT to reinforce any behavior the client engages in OTHER than self-injurious behavior (SIB) during 3-minute intervals. If no SIB occurs during the interval, the RBT delivers praise. Which procedure is this?",
    "options": [
      "Differential reinforcement of alternative behavior (DRA)",
      "Differential reinforcement of incompatible behavior (DRI)",
      "Differential reinforcement of other behavior (DRO)",
      "Differential reinforcement of low rates (DRL)"
    ],
    "correct": 2,
    "rationale": "C is correct. Differential reinforcement of other behavior (DRO) involves delivering reinforcement when the target problem behavior has not occurred for a specified time interval. The reinforcer is delivered for the absence of the problem behavior, regardless of what other behavior the client is doing. A is incorrect because DRA requires reinforcing a specific alternative behavior that serves the same function, not just any behavior other than the target. B is incorrect because DRI requires reinforcing a behavior that is physically incompatible with the target behavior (e.g., hands in lap when the problem behavior is hand-biting). D is incorrect because DRL involves reinforcing reduced rates of the behavior, not its complete absence during an interval.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 48,
    "stem": "An RBT is implementing extinction for a client whose screaming is maintained by attention. What should the RBT do when the client screams?",
    "options": [
      "Provide a verbal reprimand to the client",
      "Redirect the client to a different activity",
      "Withhold attention and do not respond to the screaming",
      "Remove the client from the environment"
    ],
    "correct": 2,
    "rationale": "C is correct. Extinction involves withholding the reinforcer that maintains the behavior. Since screaming is maintained by attention, the RBT should withhold attention when the client screams — not looking at, talking to, or otherwise responding to the client during screaming. A is incorrect because a verbal reprimand provides attention, which would reinforce the attention-maintained behavior. B is incorrect because redirecting involves giving the client attention and interaction, which would reinforce the screaming. D is incorrect because removing the client from the environment is a form of time-out, not extinction, and does not directly address withholding the maintaining reinforcer.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 49,
    "stem": "After implementing extinction for attention-maintained screaming, the RBT notices that the client's screaming initially increases in frequency and intensity before it begins to decrease. What is this phenomenon called?",
    "options": [
      "Spontaneous recovery",
      "Extinction burst",
      "Behavioral contrast",
      "Response generalization"
    ],
    "correct": 1,
    "rationale": "B is correct. An extinction burst is a temporary increase in the frequency, duration, or intensity of the target behavior when reinforcement is first withheld. This is a predictable and expected phenomenon during extinction. A is incorrect because spontaneous recovery refers to the reappearance of a previously extinguished behavior after a period of time, not the initial increase at the start of extinction. C is incorrect because behavioral contrast refers to a change in behavior in one context that occurs when reinforcement conditions change in another context. D is incorrect because response generalization involves the emergence of untrained response forms.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 50,
    "stem": "A client's BIP states that when the client engages in aggression, the RBT should implement escape extinction by continuing to present the task demand. The client begins hitting the table and crying intensely. What should the RBT do?",
    "options": [
      "Remove the demand to calm the client down and try again later",
      "Continue presenting the demand as specified in the BIP while ensuring safety",
      "Implement a new intervention not included in the BIP",
      "Leave the room to avoid reinforcing the behavior"
    ],
    "correct": 1,
    "rationale": "B is correct. Escape extinction involves continuing to present the demand even when the problem behavior occurs, preventing the client from escaping the task through the problem behavior. The RBT should follow the BIP as written while ensuring everyone's safety. A is incorrect because removing the demand would reinforce the aggression with escape, which is the opposite of escape extinction. C is incorrect because implementing a new intervention not in the BIP is outside the RBT's scope and could be harmful. D is incorrect because leaving the room does not maintain the demand and may inadvertently provide escape from the task.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 51,
    "stem": "An RBT is working with a client whose behavior plan includes a high-probability instructional sequence before presenting difficult demands. What does this involve?",
    "options": [
      "Presenting several easy or preferred requests before delivering the difficult request",
      "Providing reinforcement before the client has a chance to engage in problem behavior",
      "Removing all demands and providing free access to preferred items",
      "Gradually increasing the difficulty of instructions over multiple sessions"
    ],
    "correct": 0,
    "rationale": "A is correct. A high-probability (high-p) instructional sequence involves presenting a series of easy or preferred requests that the client is likely to comply with (high-p instructions) immediately before presenting a more difficult or non-preferred request (low-p instruction). This builds behavioral momentum and increases the likelihood of compliance with the difficult request. B is incorrect because this describes noncontingent reinforcement, not a high-p sequence. C is incorrect because removing demands entirely is not the goal; the purpose is to increase compliance with demands. D is incorrect because this describes systematic demand fading, not a high-p instructional sequence.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 52,
    "stem": "A client engages in elopement (running away) that is maintained by escape from demands. The BCBA designs a DRA procedure. Which replacement behavior would be the MOST appropriate to teach?",
    "options": [
      "Teaching the client to request a break using a communication card",
      "Teaching the client to sit with hands folded",
      "Teaching the client to engage in deep breathing exercises",
      "Teaching the client to play with a fidget toy"
    ],
    "correct": 0,
    "rationale": "A is correct. In DRA, the alternative behavior should serve the same function as the problem behavior. Since elopement is maintained by escape, the replacement behavior should be a more appropriate way to access escape — such as requesting a break. This gives the client a functional communication response that achieves the same outcome. B is incorrect because sitting with hands folded does not provide the client with a way to access escape. C is incorrect because deep breathing may help with regulation but does not serve the escape function. D is incorrect because playing with a fidget toy does not address the escape function of the behavior.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 53,
    "stem": "An RBT is implementing a behavior intervention plan for a client who engages in property destruction. During a session, the client picks up a chair. What should the RBT prioritize?",
    "options": [
      "Collecting data on the behavior before intervening",
      "Implementing the extinction procedure as written in the BIP",
      "Ensuring the safety of the client and others in the environment",
      "Contacting the BCBA for immediate guidance"
    ],
    "correct": 2,
    "rationale": "C is correct. Safety is always the top priority. When a client engages in behavior that poses an immediate risk to themselves or others (such as picking up a chair that could be thrown), the RBT must first ensure everyone's safety before focusing on data collection or specific BIP procedures. A is incorrect because while data collection is important, safety takes precedence in a crisis situation. B is incorrect because implementing extinction may not be the appropriate immediate response when there is an imminent safety risk. D is incorrect because contacting the BCBA should happen after the immediate safety concern is addressed.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 54,
    "stem": "An RBT is implementing an antecedent intervention by modifying the environment before a session. The RBT removes items that typically trigger problem behavior and arranges the workspace to minimize distractions. What type of intervention is this?",
    "options": [
      "Punishment procedure",
      "Extinction procedure",
      "Environmental modification (antecedent manipulation)",
      "Consequence-based intervention"
    ],
    "correct": 2,
    "rationale": "C is correct. Environmental modification is an antecedent-based strategy that involves changing the environment before the behavior occurs to reduce the likelihood of problem behavior. Removing triggers and minimizing distractions are proactive changes to the antecedent conditions. A is incorrect because punishment involves presenting an aversive stimulus or removing a preferred stimulus after a behavior to decrease it. B is incorrect because extinction involves withholding the reinforcer that maintains a behavior after it occurs. D is incorrect because consequence-based interventions are applied after the behavior, not before.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 55,
    "stem": "A client's problem behavior has been on extinction for two weeks and has significantly decreased. One day, the behavior suddenly reappears at a high rate even though the extinction procedure is still in place. What is this most likely an example of?",
    "options": [
      "An extinction burst",
      "Spontaneous recovery",
      "Behavioral contrast",
      "Stimulus generalization"
    ],
    "correct": 1,
    "rationale": "B is correct. Spontaneous recovery is the temporary reappearance of a previously extinguished behavior after a period of time during which the behavior had decreased. It is a normal part of the extinction process. A is incorrect because an extinction burst occurs at the beginning of extinction when the behavior initially increases before decreasing, not after the behavior has already significantly decreased. C is incorrect because behavioral contrast involves behavior changes in one context due to reinforcement changes in another context. D is incorrect because stimulus generalization involves responding similarly across different stimuli or settings.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 56,
    "stem": "An RBT is implementing a DRI procedure for a client who puts non-food items in their mouth. Which replacement behavior would be MOST appropriate?",
    "options": [
      "Teaching the client to request a preferred food item",
      "Teaching the client to keep their hands in their lap",
      "Teaching the client to chew on an approved sensory chew toy",
      "Teaching the client to sort objects into containers using both hands"
    ],
    "correct": 2,
    "rationale": "C is correct. Differential reinforcement of incompatible behavior (DRI) requires reinforcing a behavior that is physically incompatible with the problem behavior — meaning the client cannot do both at the same time. Chewing on an approved sensory chew toy is incompatible with putting non-food items in the mouth because the mouth is already occupied. A is incorrect because requesting a food item is an alternative behavior (DRA) but is not physically incompatible with pica. B is incorrect because keeping hands in the lap does not prevent the client from putting items in their mouth. D is incorrect because sorting objects with hands does not prevent oral behaviors.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 57,
    "stem": "An RBT implements a client's crisis plan during an episode of severe self-injurious behavior. The crisis plan specifies protective equipment and specific physical management procedures. After the episode, what should the RBT do FIRST?",
    "options": [
      "Resume the regular session as if nothing happened",
      "Document the incident and notify the supervisor",
      "Implement a punishment procedure to prevent future episodes",
      "Discuss the incident in detail with the client's parent during pickup"
    ],
    "correct": 1,
    "rationale": "B is correct. After a crisis event, the RBT should document the incident thoroughly (including what happened, what interventions were used, and the outcome) and notify their supervisor as soon as possible. This ensures proper documentation and allows the BCBA to review and potentially modify the intervention plan. A is incorrect because resuming as if nothing happened ignores the need for documentation and clinical review. C is incorrect because implementing a new punishment procedure is outside the RBT's scope of practice and was not specified in the plan. D is incorrect because while parents may need to be informed, the RBT should first document and notify the supervisor, who will determine how and what to communicate to the family.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 58,
    "stem": "An RBT notices that a client's problem behavior occurs more frequently during transitions between activities. The BCBA adds a visual timer and a transition warning ('2 minutes until cleanup') to the behavior plan. This is an example of which type of strategy?",
    "options": [
      "A consequence-based strategy",
      "An antecedent-based strategy",
      "A punishment procedure",
      "An extinction procedure"
    ],
    "correct": 1,
    "rationale": "B is correct. Adding a visual timer and transition warning are antecedent-based strategies because they modify what happens before the behavior occurs. These strategies aim to prevent the problem behavior by making the transition more predictable and manageable. A is incorrect because consequence-based strategies are implemented after the behavior occurs. C is incorrect because punishment involves delivering an aversive consequence or removing a reinforcer after a behavior. D is incorrect because extinction involves withholding the reinforcer that maintains the behavior.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 59,
    "stem": "An RBT is working with a client whose BIP includes a DRL (differential reinforcement of low rates) procedure for calling out in class. What does this mean the RBT should do?",
    "options": [
      "Reinforce the client only when they do not call out at all during the session",
      "Reinforce the client when the rate of calling out is at or below a specified criterion",
      "Reinforce an alternative behavior that replaces calling out",
      "Ignore the calling out behavior completely"
    ],
    "correct": 1,
    "rationale": "B is correct. DRL involves providing reinforcement when the behavior occurs at or below a pre-set criterion level. It is used when the goal is to reduce (but not necessarily eliminate) the frequency of a behavior. For example, the client might earn reinforcement if they call out 3 or fewer times during the class period. A is incorrect because reinforcing the complete absence of a behavior describes DRO, not DRL. C is incorrect because reinforcing an alternative behavior describes DRA. D is incorrect because ignoring the behavior completely describes extinction.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 60,
    "stem": "A client's BIP involves providing choices before presenting demands (e.g., 'Do you want to work on math or reading first?'). This is an example of which type of intervention?",
    "options": [
      "Consequence manipulation",
      "Antecedent intervention (offering choices)",
      "Differential reinforcement",
      "Response blocking"
    ],
    "correct": 1,
    "rationale": "B is correct. Offering choices before a demand is an antecedent intervention because it modifies the conditions that occur before the target behavior. Providing choices can increase the likelihood of compliance and reduce problem behavior by giving the client a sense of control. A is incorrect because consequence manipulation involves changing what happens after the behavior, not before. C is incorrect because differential reinforcement involves selectively reinforcing certain behaviors while withholding reinforcement for others. D is incorrect because response blocking involves physically preventing the client from engaging in the behavior.",
    "domain": "D",
    "domain_name": "Behavior Reduction"
  },
  {
    "num": 61,
    "stem": "After completing a therapy session, an RBT needs to write a session note. Which of the following is the MOST appropriate information to include?",
    "options": [
      "The RBT's personal opinions about the client's progress and family dynamics",
      "Objective descriptions of behaviors observed, data collected, and programs implemented",
      "A comparison of this client's performance with other clients on the caseload",
      "Predictions about the client's future outcomes based on the RBT's intuition"
    ],
    "correct": 1,
    "rationale": "B is correct. Session notes should contain objective, factual information including what behaviors were observed, what data was collected, which programs were implemented, and any notable events. Documentation should be accurate, objective, and professional. A is incorrect because session notes should be objective and should not include personal opinions about family dynamics. C is incorrect because comparing clients is a breach of confidentiality and is not relevant to documenting a single session. D is incorrect because predictions based on intuition are not objective or data-based and do not belong in clinical documentation.",
    "domain": "E",
    "domain_name": "Documentation and Reporting"
  },
  {
    "num": 62,
    "stem": "During a session, an RBT notices that the client has a new bruise on their arm that was not present at the previous session. The client's caregiver says the child fell at the playground. What should the RBT do?",
    "options": [
      "Accept the caregiver's explanation and continue the session without further action",
      "Confront the caregiver and demand a more detailed explanation",
      "Document the observation objectively and report it to their supervisor immediately",
      "Take a photograph of the bruise to share with other team members"
    ],
    "correct": 2,
    "rationale": "C is correct. RBTs are mandated reporters and must document any signs of possible abuse or neglect objectively and report their observations to their supervisor. The supervisor will determine the appropriate next steps, which may include filing a report with the appropriate authorities. A is incorrect because simply accepting the explanation without documentation or reporting could violate mandated reporting obligations. B is incorrect because confronting the caregiver is not appropriate and could compromise the client's safety. D is incorrect because taking photographs may not be appropriate without consent and is not the RBT's role; the priority is to document and report to the supervisor.",
    "domain": "E",
    "domain_name": "Documentation and Reporting"
  },
  {
    "num": 63,
    "stem": "An RBT realizes that they accidentally recorded data on the wrong data sheet during a session. What is the most appropriate course of action?",
    "options": [
      "Throw away the incorrect data sheet and pretend it did not happen",
      "Cross out the incorrect entry with a single line, note the correction, and initial it, then record on the correct sheet",
      "Use white-out to cover the incorrect data and rewrite it on the correct sheet",
      "Wait until the end of the week to fix all data errors at once"
    ],
    "correct": 1,
    "rationale": "B is correct. The appropriate way to handle documentation errors is to draw a single line through the incorrect entry (so it remains legible), write a brief note about the correction, initial and date it, and then record the data on the correct sheet. This maintains the integrity of the record. A is incorrect because destroying data sheets compromises the clinical record and is dishonest. C is incorrect because using white-out obscures the original entry and is not an accepted practice in clinical documentation. D is incorrect because data corrections should be made as soon as possible to ensure accuracy, not delayed.",
    "domain": "E",
    "domain_name": "Documentation and Reporting"
  },
  {
    "num": 64,
    "stem": "An RBT has just completed a session in which the client exhibited a significant increase in self-injurious behavior compared to previous sessions. What should the RBT do?",
    "options": [
      "Wait until the next scheduled supervision meeting to mention it",
      "Modify the behavior intervention plan independently to address the increase",
      "Document the change in behavior and communicate it to the supervisor promptly",
      "Only document the increase if it continues for three or more consecutive sessions"
    ],
    "correct": 2,
    "rationale": "C is correct. Significant changes in client behavior should be documented and communicated to the supervising BCBA promptly, not delayed until a scheduled meeting. The BCBA needs this information to make informed clinical decisions about the treatment plan. A is incorrect because waiting to report a significant change could delay necessary modifications to the intervention plan and put the client at risk. B is incorrect because modifying the BIP is outside the RBT's scope of practice; only the BCBA can make changes to the plan. D is incorrect because significant changes should be reported immediately, not only after meeting an arbitrary threshold of consecutive sessions.",
    "domain": "E",
    "domain_name": "Documentation and Reporting"
  },
  {
    "num": 65,
    "stem": "A parent asks the RBT for a copy of their child's session data to share with the child's school team. What should the RBT do?",
    "options": [
      "Provide the data directly to the parent since they are the client's legal guardian",
      "Refer the parent to the supervising BCBA to handle the data sharing request",
      "Tell the parent that data cannot be shared under any circumstances",
      "Email the data directly to the school team since the parent requested it"
    ],
    "correct": 1,
    "rationale": "B is correct. Requests for sharing client data with third parties should be directed to the supervising BCBA, who can ensure proper authorization (such as a signed release of information) is obtained and that the data is shared appropriately while maintaining confidentiality. A is incorrect because while parents have rights to their child's records, the RBT should follow the organization's procedures and involve the supervisor to ensure proper protocols are followed. C is incorrect because data can be shared with proper authorization; telling the parent it can never be shared is inaccurate. D is incorrect because the RBT should not share data with a third party directly without proper authorization and supervisor approval.",
    "domain": "E",
    "domain_name": "Documentation and Reporting"
  },
  {
    "num": 66,
    "stem": "An RBT is documenting a client's session and needs to describe a tantrum that occurred. Which of the following is the MOST appropriate way to document the behavior?",
    "options": [
      "'Client had a terrible tantrum and was very upset and angry'",
      "'Client was being manipulative and threw a tantrum to get attention'",
      "'Client engaged in tantrum behavior (crying, falling to floor, hitting the table) for approximately 4 minutes following removal of the iPad'",
      "'Client threw a fit because they did not get what they wanted'"
    ],
    "correct": 2,
    "rationale": "C is correct. Documentation should be objective, specific, and measurable. This entry describes exactly what behaviors occurred (crying, falling to floor, hitting the table), the duration (approximately 4 minutes), and the context (following removal of the iPad) without subjective judgments. A is incorrect because 'terrible,' 'very upset,' and 'angry' are subjective and vague descriptions. B is incorrect because 'manipulative' is a subjective interpretation and attributes intent to the client. D is incorrect because 'threw a fit' and 'did not get what they wanted' are informal and imprecise language that does not belong in clinical documentation.",
    "domain": "E",
    "domain_name": "Documentation and Reporting"
  },
  {
    "num": 67,
    "stem": "An RBT finishes a session and needs to enter data into the electronic data system. The RBT realizes they left their data sheet in the session room. What should the RBT do?",
    "options": [
      "Enter approximate data from memory into the system",
      "Retrieve the data sheet and enter the actual data collected during the session",
      "Skip the data entry for this session and double-count next session",
      "Ask a colleague to estimate what the data might have been"
    ],
    "correct": 1,
    "rationale": "B is correct. The RBT should retrieve the actual data sheet and enter the data that was actually collected during the session. Accurate data entry is essential for clinical decision-making. A is incorrect because entering approximate data from memory is unreliable and could lead to inaccurate clinical decisions. C is incorrect because skipping data entry creates gaps in the record and double-counting would falsify data. D is incorrect because a colleague who was not collecting the data cannot provide accurate information.",
    "domain": "E",
    "domain_name": "Documentation and Reporting"
  },
  {
    "num": 68,
    "stem": "An RBT is updating the client's data graph and notices a significant downward trend in the target skill acquisition behavior over the past five sessions. What should the RBT do with this information?",
    "options": [
      "Change the teaching procedure to something the RBT thinks might work better",
      "Bring the data trend to the attention of the supervising BCBA during their next contact",
      "Ignore the trend since short-term data fluctuations are normal",
      "Reset the data and start graphing from the current session"
    ],
    "correct": 1,
    "rationale": "B is correct. When data shows a significant trend (especially a downward trend in a skill the client should be acquiring), the RBT should communicate this to the supervising BCBA. The BCBA is responsible for analyzing data and making program modifications. A is incorrect because changing teaching procedures is outside the RBT's scope; only the BCBA makes program changes. C is incorrect because five sessions showing a consistent downward trend is significant and should not be ignored. D is incorrect because resetting data destroys the clinical record and hides important information about the client's progress.",
    "domain": "E",
    "domain_name": "Documentation and Reporting"
  },
  {
    "num": 69,
    "stem": "An RBT is at a grocery store and sees one of their clients with the client's family. The family approaches and begins discussing the client's therapy progress in the store. What should the RBT do?",
    "options": [
      "Openly discuss the client's progress since the family initiated the conversation",
      "Politely greet the family but explain that they cannot discuss therapy details in a public setting to protect confidentiality",
      "Ignore the family completely and walk away",
      "Provide a brief update since the conversation will be short"
    ],
    "correct": 1,
    "rationale": "B is correct. The RBT must maintain client confidentiality at all times, including in public settings. Even though the family initiated the conversation, discussing therapy details in a grocery store could be overheard by others, compromising confidentiality. The RBT should politely redirect the conversation. A is incorrect because discussing therapy in a public setting risks breaching confidentiality regardless of who initiated the conversation. C is incorrect because ignoring the family is rude and unprofessional. D is incorrect because even a brief update in a public setting can compromise confidentiality.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 70,
    "stem": "A parent offers the RBT a $100 gift card as a thank-you for their work with the child. What should the RBT do?",
    "options": [
      "Accept the gift card since the parent is being generous",
      "Accept the gift card but report it to the supervisor",
      "Politely decline the gift and explain that accepting gifts could create a dual relationship, then inform their supervisor",
      "Accept the gift card but donate it to charity"
    ],
    "correct": 2,
    "rationale": "C is correct. RBTs should avoid accepting gifts from clients or their families as it can create a dual relationship or the appearance of a conflict of interest. The appropriate action is to politely decline and explain the professional boundary, then inform the supervisor. A is incorrect because accepting a substantial gift crosses professional boundaries regardless of the giver's intentions. B is incorrect because accepting the gift and reporting it still creates the boundary issue. D is incorrect because accepting the gift at all, regardless of what is done with it afterward, establishes an inappropriate dual relationship.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 71,
    "stem": "A client's parent asks the RBT to change the client's behavior intervention plan because they think the current interventions are too restrictive. What should the RBT do?",
    "options": [
      "Modify the BIP to accommodate the parent's request",
      "Explain to the parent that the RBT cannot change the BIP and refer them to the supervising BCBA to discuss their concerns",
      "Ignore the parent's request and continue implementing the BIP as written",
      "Agree with the parent and stop implementing the restrictive components"
    ],
    "correct": 1,
    "rationale": "B is correct. Modifying a behavior intervention plan is outside the RBT's scope of practice. The RBT should acknowledge the parent's concern, explain that only the BCBA can modify the plan, and direct the parent to discuss their concerns with the supervising BCBA. A is incorrect because RBTs do not have the authority to modify behavior plans. C is incorrect because while the RBT should continue implementing the BIP, ignoring the parent's concerns is unprofessional and does not address their needs. D is incorrect because stopping components of the BIP without BCBA authorization is a deviation from the plan and outside the RBT's scope.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 72,
    "stem": "An RBT receives a friend request on social media from the mother of a current client. What is the MOST appropriate course of action?",
    "options": [
      "Accept the request to maintain a positive relationship with the family",
      "Accept the request but limit what the parent can see on their profile",
      "Decline the request to maintain professional boundaries",
      "Block the parent so they cannot find the RBT's profile"
    ],
    "correct": 2,
    "rationale": "C is correct. Accepting a social media friend request from a client's family member creates a dual relationship that crosses professional boundaries. The RBT should decline the request to maintain appropriate boundaries. A is incorrect because accepting the request creates a dual relationship even if the intent is positive. B is incorrect because even with limited access, the connection itself represents a boundary violation. D is incorrect because blocking is unnecessarily harsh; simply declining the request is sufficient and professional.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 73,
    "stem": "An RBT overhears a colleague discussing a client's private health information with another staff member who is not involved in the client's care. What should the RBT do?",
    "options": [
      "Join the conversation to provide additional information about the client",
      "Ignore the situation since it is not the RBT's responsibility",
      "Remind the colleague that discussing client information with unauthorized individuals is a confidentiality violation and report it to their supervisor",
      "Post about the incident on social media to raise awareness about confidentiality"
    ],
    "correct": 2,
    "rationale": "C is correct. The RBT has an ethical obligation to address confidentiality violations. They should remind the colleague that discussing client information with unauthorized individuals violates confidentiality requirements and report the incident to their supervisor. A is incorrect because joining the conversation would further violate the client's confidentiality. B is incorrect because RBTs have a responsibility to report ethical violations, not ignore them. D is incorrect because posting about the incident on social media could itself be a confidentiality violation and is not a professional way to address the issue.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 74,
    "stem": "An RBT is uncertain about how to implement a specific component of a client's program. What should the RBT do?",
    "options": [
      "Skip the component and focus on parts they understand",
      "Implement the component to the best of their understanding",
      "Ask the supervising BCBA for clarification before implementing",
      "Ask the client's parent how they think it should be implemented"
    ],
    "correct": 2,
    "rationale": "C is correct. When an RBT is unsure about how to implement any part of a client's program, they should seek clarification from their supervising BCBA before proceeding. This ensures the program is implemented correctly and with fidelity. A is incorrect because skipping a program component means the client is not receiving their full treatment plan. B is incorrect because implementing a procedure incorrectly could be ineffective or even harmful. D is incorrect because parents are not responsible for directing clinical implementation; the BCBA is the appropriate resource.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 75,
    "stem": "During a supervision meeting, the BCBA provides feedback that the RBT's prompting procedure was too intrusive and may be fostering prompt dependency. How should the RBT respond?",
    "options": [
      "Disagree with the feedback and continue using their current approach",
      "Accept the feedback professionally and work with the BCBA to adjust the prompting procedure",
      "File a complaint about the BCBA's feedback",
      "Stop prompting entirely during the next session"
    ],
    "correct": 1,
    "rationale": "B is correct. RBTs should respond to supervisor feedback professionally and collaboratively. Accepting the feedback and working with the BCBA to adjust the procedure demonstrates professional growth and commitment to best practices. A is incorrect because disregarding supervisor feedback undermines the supervisory relationship and may harm the client. C is incorrect because constructive clinical feedback is a normal part of supervision, not a basis for complaint. D is incorrect because stopping prompting entirely without guidance could be just as problematic; the RBT should work with the BCBA to determine the appropriate level of prompting.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 76,
    "stem": "An RBT is working with a client whose family speaks a language different from the RBT's primary language. The RBT notices that communication with the family is difficult during parent training sessions. What is the MOST appropriate action?",
    "options": [
      "Continue the sessions and hope that communication improves over time",
      "Inform the supervisor about the communication barrier so that appropriate supports (such as a translator) can be arranged",
      "Cancel all parent training sessions until the family learns the RBT's language",
      "Use online translation tools without informing the supervisor"
    ],
    "correct": 1,
    "rationale": "B is correct. The RBT should inform their supervisor about the language barrier so appropriate supports can be arranged, such as a professional interpreter or translated materials. This ensures the family receives equitable and culturally responsive services. A is incorrect because hoping the situation improves does not address the barrier and the family may miss important information. C is incorrect because canceling parent training denies the family a critical component of their child's treatment. D is incorrect because while translation tools can be helpful, the supervisor should be informed to ensure the family receives adequate support and that confidentiality is maintained.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 77,
    "stem": "An RBT arrives at a client's home for a session and notices the home environment appears unsafe (e.g., exposed wires, hazardous substances within the child's reach). What should the RBT do?",
    "options": [
      "Conduct the session as planned and ignore the environmental hazards",
      "Refuse to enter the home and leave immediately without informing anyone",
      "Document the safety concerns, ensure immediate safety, and report to the supervisor",
      "Post about the unsafe conditions on social media to raise awareness"
    ],
    "correct": 2,
    "rationale": "C is correct. The RBT should prioritize the client's safety by documenting the observed hazards, taking any immediate steps to ensure safety (e.g., moving hazardous substances out of reach if possible), and reporting the concerns to their supervisor. The supervisor can determine appropriate next steps. A is incorrect because ignoring safety hazards puts the client and the RBT at risk. B is incorrect because leaving without informing anyone does not address the safety concern or fulfill the RBT's professional responsibility. D is incorrect because posting on social media is a confidentiality violation and does not address the safety concern appropriately.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 78,
    "stem": "An RBT is asked by a family friend to provide ABA therapy to their child on weekends privately, outside of the RBT's employment with an ABA company. What should the RBT do?",
    "options": [
      "Agree to provide services since it will help the child",
      "Agree but only if the family pays in cash",
      "Decline because RBTs must practice under the supervision of a BCBA and within a professional framework",
      "Agree as long as the family signs a waiver"
    ],
    "correct": 2,
    "rationale": "C is correct. RBTs must practice under the close, ongoing supervision of a BCBA. Providing ABA services independently, without proper supervision, is outside the RBT's scope of practice and violates ethical guidelines regardless of the relationship. A is incorrect because the RBT cannot provide services independently regardless of the benefit to the child. B is incorrect because the payment method does not change the requirement for supervision. D is incorrect because a waiver does not override the ethical and professional requirement for BCBA supervision.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 79,
    "stem": "An RBT is working with a teenager who confides that they are being bullied at school but asks the RBT not to tell anyone. What should the RBT do?",
    "options": [
      "Keep the information confidential as the client requested",
      "Promise not to tell anyone but secretly inform the BCBA",
      "Explain to the client that they need to share this information with their supervisor because it involves the client's welfare, then inform the BCBA",
      "Advise the client on how to handle the bullying themselves"
    ],
    "correct": 2,
    "rationale": "C is correct. The RBT should be honest with the client about the limits of confidentiality and explain that they need to share information that affects the client's welfare with their supervisor. The RBT should then inform the BCBA so appropriate supports can be put in place. A is incorrect because the client's welfare takes priority over the confidentiality request, and the RBT has a duty to report concerns about client welfare. B is incorrect because making a promise the RBT does not intend to keep is dishonest and damages trust. D is incorrect because advising the client on how to handle bullying is outside the RBT's scope and may not adequately address the situation.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 80,
    "stem": "An RBT realizes they made an error during a session — they accidentally reinforced a problem behavior. What is the BEST course of action?",
    "options": [
      "Ignore the mistake and hope it does not affect the client's progress",
      "Document the error and discuss it with the supervising BCBA to determine how to address it",
      "Punish the client's next occurrence of the problem behavior to correct the mistake",
      "Avoid documenting the error to prevent getting in trouble"
    ],
    "correct": 1,
    "rationale": "B is correct. Errors happen, and the professional response is to acknowledge the mistake, document it, and discuss it with the supervisor. The BCBA can help determine whether the error impacted the client's progress and how to address it going forward. A is incorrect because ignoring errors can lead to repeated mistakes and negatively impact the client. C is incorrect because using punishment to compensate for the RBT's error is inappropriate and potentially harmful. D is incorrect because failing to document errors is dishonest and prevents the BCBA from making informed decisions about treatment.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 81,
    "stem": "An RBT is scheduled for a supervision session but the BCBA cancels at the last minute. This has happened several times over the past month. What should the RBT do?",
    "options": [
      "Continue working without supervision since the BCBA is busy",
      "Document the missed supervision sessions and report the concern through appropriate channels",
      "Stop seeing clients until supervision is provided",
      "Find a different BCBA to supervise them without informing their current supervisor"
    ],
    "correct": 1,
    "rationale": "B is correct. RBTs are required to receive ongoing supervision. If supervision is not being provided as required, the RBT should document the missed sessions and report the concern through appropriate channels (such as their employer or the BACB). A is incorrect because practicing without adequate supervision violates RBT requirements and could negatively impact client care. C is incorrect because abruptly stopping client services could harm clients; the proper course is to address the supervision gap through proper channels. D is incorrect because switching supervisors without proper procedures could create ethical and professional complications.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 82,
    "stem": "An RBT is working with a client and the parent makes a culturally specific request about how therapy should be conducted (e.g., requesting that shoes be removed before entering the home). What should the RBT do?",
    "options": [
      "Ignore the request since it is not related to therapy",
      "Respect the family's cultural practice and accommodate the request",
      "Report the family for making unreasonable demands",
      "Tell the family that therapy must be conducted according to the RBT's cultural norms"
    ],
    "correct": 1,
    "rationale": "B is correct. RBTs should be culturally responsive and respectful of the family's cultural practices, especially when the request does not conflict with effective treatment. Removing shoes before entering a home is a reasonable cultural request that the RBT should accommodate. A is incorrect because ignoring the family's cultural practices is disrespectful and can damage the therapeutic relationship. C is incorrect because a culturally specific request is not unreasonable and does not warrant a report. D is incorrect because imposing the RBT's own cultural norms on the family is inappropriate and does not demonstrate cultural responsiveness.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 83,
    "stem": "Which of the following activities is within the scope of practice for an RBT?",
    "options": [
      "Designing a new behavior intervention plan for a client",
      "Conducting a functional analysis independently",
      "Implementing a skill acquisition program as written by the supervising BCBA",
      "Determining which assessments to administer to a new client"
    ],
    "correct": 2,
    "rationale": "C is correct. RBTs are responsible for implementing programs and procedures as designed and directed by the supervising BCBA. This includes following skill acquisition plans, collecting data, and implementing behavior intervention plans with fidelity. A is incorrect because designing BIPs requires the training and credentials of a BCBA. B is incorrect because conducting a functional analysis independently is outside the RBT's scope; functional analyses require direct oversight from a BCBA. D is incorrect because selecting assessments is part of the BCBA's role in treatment planning.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 84,
    "stem": "An RBT discovers that a colleague has been falsifying client data by recording higher performance scores than what actually occurred during sessions. What should the RBT do?",
    "options": [
      "Confront the colleague and demand they correct the data",
      "Ignore it since it is not the RBT's client",
      "Report the concern to the supervisor or through the appropriate reporting channels",
      "Correct the colleague's data themselves without telling anyone"
    ],
    "correct": 2,
    "rationale": "C is correct. Falsifying data is a serious ethical violation that can harm clients by leading to incorrect treatment decisions. The RBT has an ethical obligation to report this concern to their supervisor or through appropriate reporting channels. A is incorrect because while addressing the issue is important, directly confronting the colleague may not be effective and the formal reporting process should be followed. B is incorrect because all professionals have a duty to report ethical violations regardless of whether the affected client is on their caseload. D is incorrect because altering another person's data without authorization is also problematic and does not address the underlying ethical violation.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  },
  {
    "num": 85,
    "stem": "An RBT's certification is about to expire. The RBT has not yet completed the required continuing education hours. What should the RBT do?",
    "options": [
      "Continue practicing and complete the hours after renewal",
      "Let the certification lapse and continue working as an RBT",
      "Complete the required continuing education hours before the expiration date and renew the certification on time",
      "Ask the supervisor to waive the continuing education requirement"
    ],
    "correct": 2,
    "rationale": "C is correct. RBTs are responsible for maintaining their certification by completing all requirements, including continuing education hours, before the certification expires. It is the RBT's professional responsibility to plan ahead and ensure timely renewal. A is incorrect because practicing without completed continuing education requirements may violate certification rules. B is incorrect because allowing certification to lapse means the individual cannot legally practice as an RBT. D is incorrect because the supervisor does not have the authority to waive BACB requirements for certification renewal.",
    "domain": "F",
    "domain_name": "Professional Conduct and Scope of Practice"
  }
];
