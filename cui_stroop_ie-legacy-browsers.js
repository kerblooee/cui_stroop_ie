/********************** 
 * Cui_Stroop_Ie Test *
 **********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('gray'),
  units: 'norm',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'cui_stroop_ie';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructPracticeRoutineBegin());
flowScheduler.add(instructPracticeRoutineEachFrame());
flowScheduler.add(instructPracticeRoutineEnd());
const practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practiceLoopBegin, practiceLoopScheduler);
flowScheduler.add(practiceLoopScheduler);
flowScheduler.add(practiceLoopEnd);
flowScheduler.add(instructRoutineBegin());
flowScheduler.add(instructRoutineEachFrame());
flowScheduler.add(instructRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'trialTypes.csv', 'path': 'trialTypes.csv'},
    {'name': 'blockNrs.csv', 'path': 'blockNrs.csv'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructPracticeClock;
var instr1;
var ready1;
var trialClock;
var word_rect;
var background;
var word;
var resp;
var mask;
var feedbackClock;
var msg;
var feedback_2;
var reminder;
var instructClock;
var instrText;
var ready;
var instr_blockClock;
var block_instr;
var block_nr;
var ready_2;
var thanksClock;
var thanksText;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructPractice"
  instructPracticeClock = new util.Clock();
  instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 1.2, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  ready1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  word_rect = new visual.Rect ({
    win: psychoJS.window, name: 'word_rect', 
    width: [1, 0.4][0], height: [1, 0.4][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0.5, 0.5, 0.5]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  background = new visual.Rect ({
    win: psychoJS.window, name: 'background', units : 'norm', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  word = new visual.TextStim({
    win: psychoJS.window,
    name: 'word',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.4,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mask = new visual.TextStim({
    win: psychoJS.window,
    name: 'mask',
    text: 'XXXXX',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.4,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  msg = "";
  
  feedback_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1, 1, 1]),  opacity: 1,
    depth: -1.0 
  });
  
  reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'reminder',
    text: 'LEFT for RED\nDOWN for GREEN\nRIGHT for BLUE\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "instruct"
  instructClock = new util.Clock();
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: 'OK. Ready for the real thing?\n\nRemember, please respond to the WORD, not to the background colour.\nPress:\n\nLEFT for RED\nDOWN for GREEN\nRIGHT for BLUE\n(ESC will quit)\n\nPress any key to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1, 1, 1]),  opacity: 1,
    depth: 0.0 
  });
  
  ready = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_block"
  instr_blockClock = new util.Clock();
  block_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_instr',
    text: 'You are about to start block:\n\n\n\n\n\nout of 4. If you need to take a short break, please do so now.\n\nPress any key to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  block_nr = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_nr',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  ready_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  word_rect = new visual.Rect ({
    win: psychoJS.window, name: 'word_rect', 
    width: [1, 0.4][0], height: [1, 0.4][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0.5, 0.5, 0.5]),
    fillColor: new util.Color([0.5, 0.5, 0.5]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  background = new visual.Rect ({
    win: psychoJS.window, name: 'background', units : 'norm', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  word = new visual.TextStim({
    win: psychoJS.window,
    name: 'word',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.4,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mask = new visual.TextStim({
    win: psychoJS.window,
    name: 'mask',
    text: 'XXXXX',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.4,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanksText = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanksText',
    text: 'This is the end of the experiment.\n\nThanks!',
    font: 'arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1, 1, 1]),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _ready1_allKeys;
var instructPracticeComponents;
function instructPracticeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructPractice'-------
    t = 0;
    instructPracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr1.setText('Welcome to the Stroop task!\n\nIn every trial of this task, you will see a colour word appear very quickly (RED, GREEN, BLUE), followed by a mask (XXXXX). Your task is to indicate which word appeared *as quickly as you can*. The text will always be in black. The background colour of the screen will change briefly before the word appears. Sometimes the background colour will be the same as the word (e.g., the word "RED" against a red background), and sometimes it will be different (e.g., the word "RED" against a blue background). Do NOT make your response based on the background colour. Please respond only to the word that was shown.\n\nPress:\nLEFT arrow key for the word RED\nDOWN arrow key for the word GREEN\nRIGHT arrow key for the word BLUE\n(ESC will quit)\n\nLet\'s start with a few practice trials. The practice trials will show you a reminder of which button to press for each colour. They will also show you feedback on your accuracy. Trials in the main experiment will not provide button reminders or feedback.\n\nPress the SPACEBAR to continue.');
    ready1.keys = undefined;
    ready1.rt = undefined;
    _ready1_allKeys = [];
    // keep track of which components have finished
    instructPracticeComponents = [];
    instructPracticeComponents.push(instr1);
    instructPracticeComponents.push(ready1);
    
    instructPracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructPracticeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructPractice'-------
    // get current time
    t = instructPracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr1* updates
    if (t >= 0.0 && instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1.tStart = t;  // (not accounting for frame time here)
      instr1.frameNStart = frameN;  // exact frame index
      
      instr1.setAutoDraw(true);
    }

    
    // *ready1* updates
    if (t >= 0.0 && ready1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready1.tStart = t;  // (not accounting for frame time here)
      ready1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready1.clearEvents(); });
    }

    if (ready1.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready1.getKeys({keyList: [], waitRelease: false});
      _ready1_allKeys = _ready1_allKeys.concat(theseKeys);
      if (_ready1_allKeys.length > 0) {
        ready1.keys = _ready1_allKeys[_ready1_allKeys.length - 1].name;  // just the last key pressed
        ready1.rt = _ready1_allKeys[_ready1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructPracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructPracticeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructPractice'-------
    instructPracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instructPractice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice;
var currentLoop;
function practiceLoopBegin(practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trialTypes.csv',
    seed: undefined, name: 'practice'
  });
  psychoJS.experiment.addLoop(practice); // add the loop to the experiment
  currentLoop = practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  practice.forEach(function() {
    const snapshot = practice.getSnapshot();

    practiceLoopScheduler.add(importConditions(snapshot));
    practiceLoopScheduler.add(trialRoutineBegin(snapshot));
    practiceLoopScheduler.add(trialRoutineEachFrame(snapshot));
    practiceLoopScheduler.add(trialRoutineEnd(snapshot));
    practiceLoopScheduler.add(feedbackRoutineBegin(snapshot));
    practiceLoopScheduler.add(feedbackRoutineEachFrame(snapshot));
    practiceLoopScheduler.add(feedbackRoutineEnd(snapshot));
    practiceLoopScheduler.add(endLoopIteration(practiceLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function practiceLoopEnd() {
  psychoJS.experiment.removeLoop(practice);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'blockNrs.csv',
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  blocks.forEach(function() {
    const snapshot = blocks.getSnapshot();

    blocksLoopScheduler.add(importConditions(snapshot));
    blocksLoopScheduler.add(instr_blockRoutineBegin(snapshot));
    blocksLoopScheduler.add(instr_blockRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(instr_blockRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopEnd);
    blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 4, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trialTypes.csv',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var _resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    background.setFillColor(new util.Color(bgColor.toString()));
    background.setLineColor(new util.Color(bgColor.toString()));
    word.setText(text.toString());
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(word_rect);
    trialComponents.push(background);
    trialComponents.push(word);
    trialComponents.push(resp);
    trialComponents.push(mask);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *word_rect* updates
    if (frameN >= 0 && word_rect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_rect.tStart = t;  // (not accounting for frame time here)
      word_rect.frameNStart = frameN;  // exact frame index
      
      word_rect.setAutoDraw(true);
    }

    
    // *background* updates
    if (frameN >= 60 && background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background.tStart = t;  // (not accounting for frame time here)
      background.frameNStart = frameN;  // exact frame index
      
      background.setAutoDraw(true);
    }

    if ((background.status === PsychoJS.Status.STARTED || background.status === PsychoJS.Status.FINISHED) && frameN >= 62) {
      background.setAutoDraw(false);
    }
    
    // *word* updates
    if (frameN >= 62 && word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word.tStart = t;  // (not accounting for frame time here)
      word.frameNStart = frameN;  // exact frame index
      
      word.setAutoDraw(true);
    }

    if ((word.status === PsychoJS.Status.STARTED || word.status === PsychoJS.Status.FINISHED) && frameN >= 64) {
      word.setAutoDraw(false);
    }
    
    // *resp* updates
    if (frameN >= 64 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }

    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['left', 'down', 'right'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        // was this correct?
        if (resp.keys == corrAns) {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *mask* updates
    if (frameN >= 64 && mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask.tStart = t;  // (not accounting for frame time here)
      mask.frameNStart = frameN;  // exact frame index
      
      mask.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         resp.corr = 1;  // correct non-response
      } else {
         resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('resp.keys', resp.keys);
    psychoJS.experiment.addData('resp.corr', resp.corr);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        routineTimer.reset();
        }
    
    resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    if (resp.corr) {
        msg = "Correct!";
    } else {
        msg = "Oops! That was wrong";
    }
    
    feedback_2.setText(msg);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_2);
    feedbackComponents.push(reminder);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_2* updates
    if (t >= 0.0 && feedback_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_2.tStart = t;  // (not accounting for frame time here)
      feedback_2.frameNStart = frameN;  // exact frame index
      
      feedback_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((feedback_2.status === PsychoJS.Status.STARTED || feedback_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      feedback_2.setAutoDraw(false);
    }
    
    // *reminder* updates
    if (t >= 0.0 && reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder.tStart = t;  // (not accounting for frame time here)
      reminder.frameNStart = frameN;  // exact frame index
      
      reminder.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((reminder.status === PsychoJS.Status.STARTED || reminder.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      reminder.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _ready_allKeys;
var instructComponents;
function instructRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instruct'-------
    t = 0;
    instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ready.keys = undefined;
    ready.rt = undefined;
    _ready_allKeys = [];
    // keep track of which components have finished
    instructComponents = [];
    instructComponents.push(instrText);
    instructComponents.push(ready);
    
    instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instruct'-------
    // get current time
    t = instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }

    
    // *ready* updates
    if (t >= 0 && ready.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready.tStart = t;  // (not accounting for frame time here)
      ready.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready.clearEvents(); });
    }

    if (ready.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready.getKeys({keyList: [], waitRelease: false});
      _ready_allKeys = _ready_allKeys.concat(theseKeys);
      if (_ready_allKeys.length > 0) {
        ready.keys = _ready_allKeys[_ready_allKeys.length - 1].name;  // just the last key pressed
        ready.rt = _ready_allKeys[_ready_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instruct'-------
    instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ready_2_allKeys;
var instr_blockComponents;
function instr_blockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_block'-------
    t = 0;
    instr_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    block_nr.setText(block.toString());
    ready_2.keys = undefined;
    ready_2.rt = undefined;
    _ready_2_allKeys = [];
    // keep track of which components have finished
    instr_blockComponents = [];
    instr_blockComponents.push(block_instr);
    instr_blockComponents.push(block_nr);
    instr_blockComponents.push(ready_2);
    
    instr_blockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_blockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_block'-------
    // get current time
    t = instr_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_instr* updates
    if (t >= 0.0 && block_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_instr.tStart = t;  // (not accounting for frame time here)
      block_instr.frameNStart = frameN;  // exact frame index
      
      block_instr.setAutoDraw(true);
    }

    
    // *block_nr* updates
    if (t >= 0.0 && block_nr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_nr.tStart = t;  // (not accounting for frame time here)
      block_nr.frameNStart = frameN;  // exact frame index
      
      block_nr.setAutoDraw(true);
    }

    
    // *ready_2* updates
    if (t >= 0.0 && ready_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_2.tStart = t;  // (not accounting for frame time here)
      ready_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready_2.clearEvents(); });
    }

    if (ready_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_2.getKeys({keyList: [], waitRelease: false});
      _ready_2_allKeys = _ready_2_allKeys.concat(theseKeys);
      if (_ready_2_allKeys.length > 0) {
        ready_2.keys = _ready_2_allKeys[_ready_2_allKeys.length - 1].name;  // just the last key pressed
        ready_2.rt = _ready_2_allKeys[_ready_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_blockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_blockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_block'-------
    instr_blockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ready_2.keys', ready_2.keys);
    if (typeof ready_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready_2.rt', ready_2.rt);
        routineTimer.reset();
        }
    
    ready_2.stop();
    // the Routine "instr_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanksText);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'thanks'-------
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanksText* updates
    if (t >= 0.0 && thanksText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanksText.tStart = t;  // (not accounting for frame time here)
      thanksText.frameNStart = frameN;  // exact frame index
      
      thanksText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((thanksText.status === PsychoJS.Status.STARTED || thanksText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      thanksText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'thanks'-------
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
