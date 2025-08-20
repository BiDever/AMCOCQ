//const allAutomotiveQuestions = [
const questions = [{
    id: "q_1_sensor",
    category: "Engine Management",
    level: "Level 4",
    question: "A sensor used to detect abnormal engine vibration is the:",
    choices: [
        "MAP sensor",
        "speed sensor",
        "knock sensor",
        "temperature sensor"
    ],
    correctAnswer: 2,
    explanation: "The knock sensor listens for detonation or engine knock, which are abnormal vibrations."
},
    {
        id: "q_2_planning",
        category: "Management and Planning",
        level: "Level 4",
        question: "The first step of the management planning process is to:",
        choices: [
            "identify resources",
            "set the goal",
            "prepare a timeline",
            "identify the site building"
        ],
        correctAnswer: 1,
        explanation: "Setting a clear goal is the foundational step before identifying resources or creating a timeline."
    },
    {
        id: "q_3_quality",
        category: "Management and Planning",
        level: "Level 4",
        question: "Quality standards exclude:",
        choices: [
            "materials",
            "service",
            "product",
            "capital"
        ],
        correctAnswer: 3,
        explanation: "Quality standards typically apply to materials, products, and services, not capital itself."
    },
    {
        id: "q_4_income",
        category: "Management and Planning",
        level: "Level 4",
        question: "Indicate how much income should be received from specific operations or activities:",
        choices: [
            "time",
            "cost",
            "revenue",
            "data"
        ],
        correctAnswer: 2,
        explanation: "Revenue directly indicates the amount of income received from operations."
    },
    {
        id: "q_5_planning_order",
        category: "Management and Planning",
        level: "Level 4",
        question: "The correct order of planning and work plan activities is:",
        choices: [
            "set object, schedule, monitoring, implement, evaluation",
            "monitoring, set object, implement, schedule, evaluation",
            "set object, schedule, evaluation, implement, monitoring",
            "set object, schedule, implement, monitoring, evaluation"
        ],
        correctAnswer: 3,
        explanation: "The logical order is to first set the objective, then schedule, implement the plan, monitor progress, and finally evaluate the results."
    },
    {
        id: "q_6_effective_plans",
        category: "Management and Planning",
        level: "Level 4",
        question: "Most effective plans are:",
        choices: [
            "complete",
            "broad",
            "simple",
            "wide"
        ],
        correctAnswer: 2,
        explanation: "Simple plans are often the most effective because they are easy to understand and execute."
    },
    {
        id: "q_7_transmission",
        category: "Electronic Systems",
        level: "Level 4",
        question: "The following are true about electronic transmission, EXCLUDE:",
        choices: [
            "it has manual gear transmission",
            "it has used solenoids",
            "it is controlled by ECU",
            "it has used sensors"
        ],
        correctAnswer: 0,
        explanation: "Electronic transmissions are not manual; they are controlled by an ECU using sensors and solenoids."
    },
    {
        id: "q_8_road_safety",
        category: "Safety and Security",
        level: "Level 4",
        question: "Road-safety system and drive system, EXCEPT:",
        choices: [
            "ABS",
            "TCS",
            "ESP",
            "central door locking system"
        ],
        correctAnswer: 3,
        explanation: "Central door locking is a convenience feature, while ABS, TCS, and ESP are active safety and drive systems."
    },
    {
        id: "q_9_theft_deterrent",
        category: "Safety and Security",
        level: "Level 4",
        question: "Which of the following are types of theft-deterrent systems, EXCLUDE?",
        choices: [
            "central door locking system",
            "alarm system",
            "immobilizers",
            "power windows"
        ],
        correctAnswer: 3,
        explanation: "Power windows are a convenience feature, not a theft-deterrent system."
    },
    {
        id: "q_10_convenience",
        category: "Comfort and Convenience",
        level: "Level 4",
        question: "The following are comfort and convenience systems on a vehicle, EXCEPT:",
        choices: [
            "cruise control",
            "seat adjustment",
            "ABS",
            "steering column adjustment"
        ],
        correctAnswer: 2,
        explanation: "ABS (Anti-lock Braking System) is a safety system, not a comfort or convenience feature."
    },
    {
        id: "q_11_gear_selection",
        category: "Electronic Systems",
        level: "Level 4",
        question: "Electronic control of automatic gear selection is dependent on, EXCEPT:",
        choices: [
            "engine torque",
            "throttle valve or air mass",
            "vehicle road speed",
            "engine speed"
        ],
        correctAnswer: 0,
        explanation: "The ECU controls automatic gear selection based on throttle, speed, and engine speed, but not directly on engine torque."
    },
    {
        id: "q_12_immobilizer_location",
        category: "Safety and Security",
        level: "Level 4",
        question: "An immobilizer is designed to prevent vehicle theft by disabling the engine, mostly found on:",
        choices: [
            "ABS",
            "key",
            "dashboard",
            "sensor"
        ],
        correctAnswer: 1,
        explanation: "The immobilizer system is typically integrated into the vehicle's key or key fob."
    },
    {
        id: "q_13_abs_function",
        category: "Safety and Security",
        level: "Level 4",
        question: "The main function of an anti-lock brake system is to:",
        choices: [
            "prevent skidding",
            "prevent spinning of wheels",
            "prevent traction of tire with road",
            "control vehicle speed"
        ],
        correctAnswer: 0,
        explanation: "ABS prevents the wheels from locking up during hard braking, which helps the driver maintain steering control and prevent skidding."
    },
    {
        id: "q_14_actuator",
        category: "Electronic Systems",
        level: "Level 4",
        question: "The following are actuators, EXCEPT:",
        choices: [
            "idle control valve",
            "injector",
            "ignition coils",
            "air flow meter"
        ],
        correctAnswer: 3,
        explanation: "An air flow meter is a sensor, not an actuator. Actuators are components that convert electrical signals into a physical action."
    },
    {
        id: "q_15_diagnostic_order",
        category: "Repair Procedures",
        level: "Level 4",
        question: "The correct order of diagnosing electronic-controlled vehicle services is:",
        choices: [
            "prepare vehicle, give guidance, conduct inspection, test performance",
            "conduct inspection, prepare vehicle, give guidance, test performance",
            "prepare vehicle, conduct inspection, give guidance, test performance",
            "test performance, prepare vehicle, conduct inspection, give guidance"
        ],
        correctAnswer: 2,
        explanation: "The logical order is to prepare the vehicle, inspect it, give guidance to the customer, and then test the performance."
    },
    {
        id: "q_16_planning_except",
        category: "Management and Planning",
        level: "Level 4",
        question: "Planning should be, EXCEPT:",
        choices: [
            "efficient",
            "transparent",
            "exclusive",
            "logical"
        ],
        correctAnswer: 2,
        explanation: "Planning should be inclusive, not exclusive, to be effective."
    },
    {
        id: "q_17_transmission_2",
        category: "Electronic Systems",
        level: "Level 4",
        question: "The following are true about electronic transmission, EXCLUDE:",
        choices: [
            "it has manual gear transmission",
            "it has used solenoids",
            "it is controlled by ECU",
            "it has used sensors"
        ],
        correctAnswer: 0,
        explanation: "Electronic transmissions are not manual; they are controlled by an ECU using sensors and solenoids."
    },
    {
        id: "q_18_road_safety_2",
        category: "Safety and Security",
        level: "Level 4",
        question: "Road-safety system and drive system, EXCEPT:",
        choices: [
            "ABS",
            "TCS",
            "ESP",
            "central door locking system"
        ],
        correctAnswer: 3,
        explanation: "Central door locking is a convenience feature, while ABS, TCS, and ESP are active safety and drive systems."
    },
    {
        id: "q_19_theft_deterrent_2",
        category: "Safety and Security",
        level: "Level 4",
        question: "Which of the following are types of theft-deterrent systems, EXCLUDE?",
        choices: [
            "central door locking system",
            "alarm system",
            "immobilizers",
            "power-windows"
        ],
        correctAnswer: 3,
        explanation: "Power windows are a convenience feature, not a theft-deterrent system."
    },
    {
        id: "q_20_scan_tool_programming",
        category: "Diagnostic Tools",
        level: "Level 4",
        question: "When we use a scan tool, it must be programmed for, EXCEPT:",
        choices: [
            "model year of a vehicle",
            "make of vehicle",
            "type of engine",
            "number of cylinders"
        ],
        correctAnswer: 3,
        explanation: "Scan tools are typically programmed based on the vehicle's model year, make, and engine type, not the number of cylinders."
    },
    {
        id: "q_21_diagnostic_tool",
        category: "Diagnostic Tools",
        level: "Level 4",
        question: "A diagnostic microprocessor designed to communicate with the vehicle computer is a:",
        choices: [
            "dynamometer",
            "multi-meter",
            "scan tool",
            "OBD"
        ],
        correctAnswer: 2,
        explanation: "A scan tool is the specific device used to communicate with the vehicle's computer via the OBD port."
    },
    {
        id: "q_22_workplace_impact",
        category: "Workplace Skills",
        level: "Level 4",
        question: "The following is the most impactful in any workplace activity to create a good atmospheric area than the other:",
        choices: [
            "skill",
            "knowledge",
            "attitude",
            "communication"
        ],
        correctAnswer: 2,
        explanation: "A positive attitude is often considered the most impactful factor in creating a good work atmosphere."
    },
    {
        id: "q_23_anti_theft",
        category: "Safety and Security",
        level: "Level 4",
        question: "The following is not an anti-theft system:",
        choices: [
            "alarm system",
            "door locking",
            "adaptive crucial system",
            "immobilizer system"
        ],
        correctAnswer: 2,
        explanation: "An 'adaptive crucial system' is not a standard automotive term; 'adaptive cruise control' is a driver-assistance system, not anti-theft."
    },
    {
        id: "q_24_diagnostic_order_2",
        category: "Repair Procedures",
        level: "Level 4",
        question: "The correct order of diagnosing a vehicle is:",
        choices: [
            "information, inspect, list problem, write the solution",
            "inspect, list problem, write the solution, information",
            "list problem, write the solution, information, inspect",
            "write the solution, information, inspect, list problem"
        ],
        correctAnswer: 0,
        explanation: "The proper diagnostic order begins with gathering information, inspecting the vehicle, listing the problems, and then writing the solution."
    },
    {
        id: "q_25_service_document",
        category: "Repair Procedures",
        level: "Level 4",
        question: "A document that manages to perform the activity of servicing, repairing, inspecting, and providing other jobs in a company to fulfill customer needs is a:",
        choices: [
            "service manual",
            "technical guidance",
            "repair manual",
            "data"
        ],
        correctAnswer: 0,
        explanation: "A service manual is the official document that outlines the procedures for vehicle servicing and repair."
    },
    {
        id: "q_26_dtc",
        category: "Diagnostic Tools",
        level: "Level 4",
        question: "DTC describes:",
        choices: [
            "Direct Trouble Code",
            "Diagnosis Trouble Code",
            "Diagnosis Time Code",
            "Data Time Code"
        ],
        correctAnswer: 1,
        explanation: "DTC stands for Diagnostic Trouble Code, which is a code stored by the ECU to indicate a specific problem."
    },
    {
        id: "q_27_air_suspension",
        category: "Chassis and Suspension",
        level: "Level 4",
        question: "Which of the following is not a feature of an air suspension system?",
        choices: [
            "self-damping",
            "improves ride comfort and greater safety of the load",
            "constant vehicle height regardless of the load",
            "progressive spring characteristic"
        ],
        correctAnswer: 0,
        explanation: "Air suspension systems do not self-damp; they require separate shock absorbers for damping."
    },
    {
        id: "q_28_rpm_signal",
        category: "Engine Management",
        level: "Level 4",
        question: "Without an RPM signal to the computer on an EFI engine:",
        choices: [
            "the system will go into back-up mode",
            "the engine will not run",
            "the engine will run, but it will be sluggish",
            "the engine will start, but run very rich"
        ],
        correctAnswer: 1,
        explanation: "The RPM signal is a critical input for the ECU to determine engine timing and fuel injection, so without it, the engine will not run."
    },
    {
        id: "q_29_service_time",
        category: "Vehicle Instruments",
        level: "Level 4",
        question: "The service time/mileage of a vehicle is indicated by the:",
        choices: [
            "speedometer",
            "trip meter",
            "tachometer",
            "odometer"
        ],
        correctAnswer: 3,
        explanation: "The odometer measures the total distance a vehicle has traveled, which is used to determine service intervals."
    },
    {
        id: "q_30_maintenance_items",
        category: "Maintenance and Service",
        level: "Level 4",
        question: "All of these are maintenance items, EXCEPT:",
        choices: [
            "water pump leak",
            "transmission flush",
            "60k service",
            "tire rotation"
        ],
        correctAnswer: 0,
        explanation: "A water pump leak is a repair, not a maintenance item. The other options are scheduled maintenance tasks."
    },
    {
        id: "q_31_worker_evaluation",
        category: "Workplace Skills",
        level: "Level 4",
        question: "During evaluating workers' performance as a workshop manager:",
        choices: [
            "you should focus on the approach and relation of the workers",
            "you should gather and use all the information that you have been recorded about the worker",
            "focus on the job performed on the evaluation day",
            "you should give the same evaluation result for every worker"
        ],
        correctAnswer: 1,
        explanation: "A fair evaluation should be based on all recorded information about the worker's performance, not just a single day's work."
    },
    {
        id: "q_32_invitation_phrase",
        category: "Communication",
        level: "Level 4",
        question: "Which phrases are used to make an invitation?",
        choices: [
            "I was wondering if you could do the job",
            "would you mind giving me a hand?",
            "would you like to attend the conference",
            "please have this box delivered"
        ],
        correctAnswer: 2,
        explanation: "'Would you like to...' is a classic and polite way to extend an invitation."
    },
    {
        id: "q_33_desirable_trait",
        category: "Workplace Skills",
        level: "Level 4",
        question: "A desirable trait that will help a worker to be successful in the job is:",
        choices: [
            "dishonest",
            "insincere",
            "negligent",
            "reliability"
        ],
        correctAnswer: 3,
        explanation: "Reliability is a highly desirable trait that shows a worker is dependable and trustworthy."
    },
    {
        id: "q_34_difficult_customer",
        category: "Communication",
        level: "Level 4",
        question: "When you encounter a difficult customer in a workshop, the following are some of the appropriate things to do, EXCEPT one:",
        choices: [
            "service them quickly but politely",
            "talk in a pleasant tone of voice",
            "send them out if they don’t listen to you",
            "keep a friendly face"
        ],
        correctAnswer: 2,
        explanation: "It is inappropriate to send a customer out. You should always maintain a professional and courteous demeanor."
    },
    {
        id: "q_35_three_basic_tests",
        category: "Repair Procedures",
        level: "Level 4",
        question: "The three basic tests an automotive technician should do before confirming what is needed to repair the vehicle are listed below, EXCEPT one:",
        choices: [
            "road test",
            "owner’s hand book",
            "aural / noise",
            "visual"
        ],
        correctAnswer: 1,
        explanation: "The three basic tests are typically road test, visual inspection, and aural (listening for sounds). The owner's handbook is a reference, not a test."
    },
    {
        id: "q_36_timing_adjustment",
        category: "Communication",
        level: "Level 4",
        question: "A customer requests that the timing be adjusted on their vehicle. The service consultant should:",
        choices: [
            "explain that ignition timing may not be adjusted",
            "quote a price for the request",
            "suggest new spark plugs with the service",
            "ask the customer about their vehicle symptoms"
        ],
        correctAnswer: 3,
        explanation: "The best practice is to understand the customer's symptoms first to determine the root cause of their concern before quoting a price or suggesting services."
    },
    {
        id: "q_37_traction_control",
        category: "Safety and Security",
        level: "Level 4",
        question: "Traction control will intervene to maintain stability of the vehicle and the control of tractive force can be by a number of methods as indicated below, EXCEPT one:",
        choices: [
            "transmission control",
            "ignition control",
            "braking effect",
            "throttle control"
        ],
        correctAnswer: 0,
        explanation: "Traction control primarily uses braking, throttle, and ignition intervention to reduce wheelspin, not direct transmission control."
    },
    {
        id: "q_38_electrical_section",
        category: "Management and Planning",
        level: "Level 4",
        question: "Which of the following is not included in the plan of an electrical section head?",
        choices: [
            "spare parts needed for maintenance and repair",
            "human resource requirements for the auto-electric section",
            "finance and budget for salary",
            "quality service providing program"
        ],
        correctAnswer: 2,
        explanation: "While they would be involved, the finance and budget for salaries is typically a broader management or HR responsibility, not solely an electrical section head's plan."
    },
    {
        id: "q_39_ordering_parts",
        category: "Repair Procedures",
        level: "Level 4",
        question: "Which of the following is important when ordering an electrical part for purchase?",
        choices: [
            "service manual",
            "data book",
            "part catalog",
            "vehicle history card"
        ],
        correctAnswer: 2,
        explanation: "A parts catalog is the specific document used to identify and order the correct parts for a vehicle."
    },
    {
        id: "q_40_maintenance_type",
        category: "Maintenance and Service",
        level: "Level 4",
        question: "A programmed maintenance which is carried out before the occurrence of failures or to detect failure before they develop to a breakdown is referred to as:",
        choices: [
            "corrective maintenance",
            "preventive maintenance",
            "improvement maintenance",
            "condition-based maintenance"
        ],
        correctAnswer: 1,
        explanation: "Preventive maintenance is performed on a regular schedule to prevent failures from occurring."
    },
    {
        id: "q_41_engine_load_sensor",
        category: "Engine Management",
        level: "Level 4",
        question: "Which of the following sensors directly measures engine load?",
        choices: [
            "manifold absolute pressure sensor",
            "coolant sensor",
            "throttle position sensor",
            "vehicle speed sensor"
        ],
        correctAnswer: 0,
        explanation: "The Manifold Absolute Pressure (MAP) sensor is the primary sensor that measures the pressure in the intake manifold, which is directly related to engine load."
    },
    {
        id: "q_42_precision",
        category: "Diagnostic Tools",
        level: "Level 4",
        question: "Precision of test equipment means the following, EXCEPT one:",
        choices: [
            "careful and exact",
            "undetermined result",
            "free from mistake or errors",
            "adhering closely to a standard"
        ],
        correctAnswer: 1,
        explanation: "Precision means the opposite of an undetermined result; it means getting a consistent, reliable result."
    },
    {
        id: "q_43_customer_communication",
        category: "Communication",
        level: "Level 4",
        question: "A customer comes in for a 30,000-mile service. While completing the service, the technician notes that the vehicle will soon need the front brake pads replaced. Which of these is the best way to address this need with the customer?",
        choices: [
            "note the technician comments on the customer repair order",
            "call the customer and offer to complete the repair explaining why it is needed"
        ],
        correctAnswer: 1,
        explanation: "Proactively communicating with the customer about a needed repair, along with an explanation, is the best practice for transparency and customer service."
    },

    //Arranged Questions Two
    {
        id: "q_1",
        category: "Safety and Security",
        level: "Level 4",
        question: "A vehicle's ABS light remains on while driving. Service consultant 'A' says that while the light is on, the ABS system will still function. Service consultant 'B' says that while the light is on, the mechanical brake system will still function. Who is right?",
        choices: [
            "A only",
            "B only",
            "both A and B",
            "neither A nor B"
        ],
        correctAnswer: 1,
        explanation: "When the ABS light is on, it indicates a fault in the ABS system, which means it will not function. However, the mechanical braking system will still work."
    },
    {
        id: "q_2",
        category: "Workplace Skills",
        level: "Level 4",
        question: "Being a supervisor or a manager makes you responsible to some extent for the work. Being in such a position, you should possess personal qualities that can help you work with others in the workplace, as stated below, but one is not. Name it:",
        choices: [
            "being a fault finder",
            "work hard to reach the goals and monitor your progress",
            "do quality work",
            "display high standard of attendance, honesty, energy and option"
        ],
        correctAnswer: 0,
        explanation: "A good manager or supervisor should be a problem solver and encourager, not just a 'fault finder'."
    },
    {
        id: "q_3",
        category: "Workplace Skills",
        level: "Level 4",
        question: "To be a good team player, you need to:",
        choices: [
            "learn to work well with others and do your own share of the work",
            "mind your own and don’t mind also your co-workers",
            "tell others that you are the boss",
            "encourage others to work alone"
        ],
        correctAnswer: 0,
        explanation: "Teamwork involves collaboration and sharing the workload, not working independently or asserting authority."
    },
    {
        id: "q_4",
        category: "Electrical Systems",
        level: "Level 4",
        question: "If a wiper motor fails to stop (keeps running) even if the vehicle is in park, the probable cause is:",
        choices: [
            "wiper motor defective",
            "defective wiper motor switch",
            "short or ground of wiper",
            "corroded wire"
        ],
        correctAnswer: 1,
        explanation: "If the motor won't stop, the switch is the most likely culprit, as it controls the power supply."
    },
    {
        id: "q_5",
        category: "Electrical Systems",
        level: "Level 4",
        question: "If a wiper motor fails to stop (keeps running), one of the following is not a cause:",
        choices: [
            "wiper motor defective",
            "defective wiper motor switch",
            "open wire of wiper motor",
            "corroded wire"
        ],
        correctAnswer: 2,
        explanation: "An open wire would prevent the motor from running at all, not cause it to run continuously."
    },
    {
        id: "q_6",
        category: "Engine Management",
        level: "Level 4",
        question: "If the engine exhausts black smoke while idling, the likely cause is:",
        choices: [
            "oxygen sensor dead",
            "MAP sensor",
            "crank shaft position sensor"
        ],
        correctAnswer: 0,
        explanation: "A faulty oxygen sensor can cause the air-fuel mixture to be too rich, leading to black smoke from unburned fuel."
    },
    {
        id: "q_7",
        category: "Electronic Systems",
        level: "Level 4",
        question: "__________ is not a basic sensor to upshift transmission:",
        choices: [
            "knock sensor",
            "speed sensor",
            "load sensor"
        ],
        correctAnswer: 0,
        explanation: "A knock sensor detects engine knock. Speed and load sensors are critical for the transmission control module to determine when to shift gears."
    },
    {
        id: "q_8",
        category: "Engine Management",
        level: "Level 4",
        question: "Which component of an engine management system is not a sensor?",
        choices: [
            "transmission fluid sensor",
            "knock sensor",
            "air flow sensor",
            "CPS sensor"
        ],
        correctAnswer: 0,
        explanation: "A transmission fluid sensor is part of the transmission system, not the engine management system."
    },
    {
        id: "q_9",
        category: "Management and Planning",
        level: "Level 4",
        question: "The following are the responsibilities of an operations manager, except:",
        choices: [
            "planning work activities",
            "setting measurable objectives",
            "work as a technical staff",
            "implementing the plan"
        ],
        correctAnswer: 2,
        explanation: "An operations manager's role is to oversee and manage the team, not to be a hands-on technical staff member."
    },
    {
        id: "q_10",
        category: "Safety and Security",
        level: "Level 4",
        question: "Which one of the following is not an anti-theft system on a vehicle?",
        choices: [
            "central locking system",
            "vehicle immobilizer",
            "alarm system",
            "adaptive cruise control"
        ],
        correctAnswer: 3,
        explanation: "Adaptive cruise control is a driver assistance system, not an anti-theft system."
    },
    {
        id: "q_11",
        category: "Repair Procedures",
        level: "Level 4",
        question: "From the given systematic malfunction diagnosis methods, which one is not a fault indicator?",
        choices: [
            "asking a personnel manager",
            "visual check and noise level testing",
            "fault memory read out",
            "customer information"
        ],
        correctAnswer: 0,
        explanation: "A personnel manager handles HR, not vehicle faults. The other options are all valid diagnostic methods."
    },
    {
        id: "q_12",
        category: "Workplace Skills",
        level: "Level 4",
        question: "Planning skills are needed to:",
        choices: [
            "to organize required resources and equipment",
            "to provide support to colleagues",
            "to organize information; assess information for",
            "to conduct small group training sessions"
        ],
        correctAnswer: 0,
        explanation: "A key aspect of planning is organizing the resources and equipment needed to complete a task."
    },
    {
        id: "q_13",
        category: "Safety and Security",
        level: "Level 4",
        question: "Which one of the following sensors is a common sensor for ABS, TCS, and ESC?",
        choices: [
            "throttle position sensor",
            "camshaft position sensor",
            "wheel speed sensor",
            "all"
        ],
        correctAnswer: 2,
        explanation: "All three systems rely on wheel speed sensors to detect if a wheel is locking up or spinning excessively."
    },
    {
        id: "q_14",
        category: "Workplace Skills",
        level: "Level 4",
        question: "_____ is not a basic reason why employees do not perform well:",
        choices: [
            "lack of skill",
            "lack of information",
            "conductive environment",
            "motivation issues"
        ],
        correctAnswer: 2,
        explanation: "A 'conductive environment' would suggest a positive and helpful workplace, which would encourage good performance, not hinder it."
    },
    {
        id: "q_15",
        category: "Repair Procedures",
        level: "Level 4",
        question: "Diagnosing a problem in any vehicle system has a certain plan of action. Among those plans, which one comes first?",
        choices: [
            "isolate the cause",
            "repair the problem",
            "verify the customer complaint",
            "identify the system"
        ],
        correctAnswer: 2,
        explanation: "The first step in any diagnosis is to confirm the customer's complaint to understand the issue."
    },
    {
        id: "q_16",
        category: "Safety and Security",
        level: "Level 4",
        question: "Electronic Stability Control (ESC):",
        choices: [
            "helps with directional stability",
            "uses a steering angle sensor",
            "operates at low speed",
            "a & b"
        ],
        correctAnswer: 3,
        explanation: "ESC uses a steering angle sensor to help maintain directional stability, not just at low speeds."
    },
    {
        id: "q_17",
        category: "HVAC",
        level: "Level 4",
        question: "Which part of the AC system causes the refrigerant to circulate in the system?",
        choices: [
            "compressor",
            "condenser",
            "blower",
            "evaporator"
        ],
        correctAnswer: 0,
        explanation: "The compressor acts as the pump, circulating the refrigerant through the AC system."
    },
    {
        id: "q_18",
        category: "HVAC",
        level: "Level 4",
        question: "Where do you find high-pressure gasses in the AC system?",
        choices: [
            "between the compressor and condenser",
            "between the compressor and evaporator",
            "between the expansion valve and evaporator",
            "between the blower and receiver dryer"
        ],
        correctAnswer: 0,
        explanation: "The compressor increases the pressure of the refrigerant gas, which then goes to the condenser to cool down."
    },
    {
        id: "q_19",
        category: "HVAC",
        level: "Level 4",
        question: "Most new vehicle manufacturers today use which refrigerant?",
        choices: [
            "CFC-12",
            "HFC-134a",
            "a & b",
            "none"
        ],
        correctAnswer: 1,
        explanation: "HFC-134a is the most common refrigerant used in modern vehicles, replacing the ozone-depleting CFC-12."
    },
    {
        id: "q_20",
        category: "HVAC",
        level: "Level 4",
        question: "_________ controls the flow and pressure of the refrigerant in the AC system?",
        choices: [
            "expansion valve",
            "compressor",
            "receiver",
            "evaporator"
        ],
        correctAnswer: 0,
        explanation: "The expansion valve regulates the flow and pressure of the liquid refrigerant before it enters the evaporator."
    },
    {
        id: "q_21",
        category: "Workplace Skills",
        level: "Level 4",
        question: "Which one is not a supervisor's role?",
        choices: [
            "role model",
            "teacher",
            "punisher",
            "monitor"
        ],
        correctAnswer: 2,
        explanation: "While supervisors enforce rules, their primary role is not to be a 'punisher' but rather to guide and lead the team."
    },
    {
        id: "q_22",
        category: "Management and Planning",
        level: "Level 4",
        question: "Every action should be planned and resources identified. Which one is not a resource?",
        choices: [
            "people",
            "time",
            "money",
            "tight atmosphere"
        ],
        correctAnswer: 3,
        explanation: "A 'tight atmosphere' describes a condition or environment, not a tangible resource used in planning."
    },
    {
        id: "q_23",
        category: "Safety and Security",
        level: "Level 4",
        question: "Which one is not included in the driver assistance system?",
        choices: [
            "cruise control system",
            "navigation system",
            "parking assistance system",
            "air bag system"
        ],
        correctAnswer: 3,
        explanation: "An airbag system is a passive safety system, not an active driver assistance system."
    },
    {
        id: "q_24",
        category: "Chassis and Suspension",
        level: "Level 4",
        question: "Conducting an air suspension system balance adjustment primarily deals with:",
        choices: [
            "compressor output increment",
            "unbalanced air suspension is identified",
            "decreasing air bag pressure",
            "adjusting the air regulator control valve"
        ],
        correctAnswer: 3,
        explanation: "Air suspension balance is controlled by adjusting the air regulator control valve."
    },
    {
        id: "q_25",
        category: "Repair Procedures",
        level: "Level 4",
        question: "The procedure for preparing for the diagnosis of an automotive vehicle is:",
        choices: [
            "listing problems, inspection, information gathering, selecting probable cause",
            "inspection, information gathering, listing problems, selecting probable cause",
            "information, inspection, listing problems, selecting the probable cause",
            "information, listing problems, selecting the probable cause, inspection"
        ],
        correctAnswer: 2,
        explanation: "The logical order is to get information first, then inspect, list the problems, and finally select the probable cause."
    },
    {
        id: "q_26",
        category: "Workplace Skills",
        level: "Level 4",
        question: "The following are a list of customers, except:",
        choices: [
            "internal & external customer",
            "competitor",
            "board member",
            "supervisor"
        ],
        correctAnswer: 1,
        explanation: "A competitor is a rival, not a customer. Internal and external customers, board members, and supervisors can all be considered 'customers' in a broader business sense."
    },
    {
        id: "q_27",
        category: "Management and Planning",
        level: "Level 4",
        question: "Resources exclude:",
        choices: [
            "staff",
            "money",
            "equipment",
            "customer"
        ],
        correctAnswer: 3,
        explanation: "Customers are the recipients of your services, not a resource used to produce them."
    },
    {
        id: "q_28",
        category: "Drivetrain",
        level: "Level 4",
        question: "A common feature of manual transmission and electronic/automatic transmission is:",
        choices: [
            "gear box",
            "hand brake",
            "fluid sensor",
            "selector lever"
        ],
        correctAnswer: 0,
        explanation: "Both manual and automatic transmissions use a gearbox to change gears, although their internal mechanisms differ."
    },
    {
        id: "q_29",
        category: "Safety and Security",
        level: "Level 4",
        question: "The system that allows the ABS system to control wheel spin during acceleration is:",
        choices: [
            "anti-lock brake system",
            "traction control system",
            "stability control system",
            "steering control system"
        ],
        correctAnswer: 1,
        explanation: "Traction control system (TCS) uses the ABS sensors and components to prevent wheel spin during acceleration."
    },
    {
        id: "q_30",
        category: "Workplace Skills",
        level: "Level 4",
        question: "To provide service quality can be related to service potential. It describes:",
        choices: [
            "worker's qualifications",
            "the quickness of service",
            "customer satisfaction",
            "all"
        ],
        correctAnswer: 0,
        explanation: "Service potential refers to the underlying ability to provide a service, which is directly tied to a worker's qualifications and skills."
    },
    {
        id: "q_31",
        category: "Management and Planning",
        level: "Level 4",
        question: "A number of trucks having different maintenance arrived. Which would you give priority if you have a lack of labor force?",
        choices: [
            "truck A which has 2000km left for its annual service",
            "truck B which has 2000km left for preventive maintenance",
            "truck C which its service time reached but it is unloaded",
            "truck D which is loaded and its service time has reached"
        ],
        correctAnswer: 3,
        explanation: "The most critical priority is a truck that is currently loaded and overdue for service, as it impacts business operations and safety."
    },
    {
        id: "q_32",
        category: "Drivetrain",
        level: "Level 4",
        question: "The engine system is responsible for the engine's proper operation, but one is not part of the engine system:",
        choices: [
            "transmission",
            "engine",
            "differential",
            "transfer case"
        ],
        correctAnswer: 1,
        explanation: "While the engine is the power source, the transmission, differential, and transfer case are part of the drivetrain that transfers power from the engine to the wheels."
    },
    {
        id: "q_33",
        category: "Communication",
        level: "Level 4",
        question: "_____ is not a method of communication:",
        choices: [
            "face-to-face",
            "telephone/voice mail",
            "e-mail",
            "telescoping"
        ],
        correctAnswer: 3,
        explanation: "'Telescoping' is not a method of communication; it refers to a mechanical action or an optical principle."
    },
    {
        id: "q_34",
        category: "Safety and Security",
        level: "Level 4",
        question: "Anti-lock braking system can significantly reduce the chance of a skid occurring, particularly when ___________.",
        choices: [
            "driving at high speed",
            "driving down steep hills",
            "heavy braking in an emergency",
            "normal braking"
        ],
        correctAnswer: 2,
        explanation: "ABS is designed specifically for heavy, emergency braking to prevent wheel lockup and skidding."
    },
    {
        id: "q_35",
        category: "Drivetrain",
        level: "Level 4",
        question: "Electronically constructed transmission and powertrain management system includes all except:",
        choices: [
            "automatic transmission",
            "differential & axle lock",
            "transmission synchronizer",
            "automatic free wheel hub"
        ],
        correctAnswer: 2,
        explanation: "Transmission synchronizers are a mechanical component of a manual transmission, not an electronic one."
    },
    {
        id: "q_36",
        category: "Technology",
        level: "Level 4",
        question: "Which of the following elaborates on the concept of new technology appropriately?",
        choices: [
            "utilize the existing system",
            "solving the problems of societies",
            "increasing cost consumption",
            "increasing human effort"
        ],
        correctAnswer: 1,
        explanation: "New technology's primary purpose is often to solve problems and improve efficiency."
    },
    {
        id: "q_37",
        category: "Safety and Security",
        level: "Level 4",
        question: "Which of the following electronically controlled systems is used to correct the motion of a vehicle for drivers?",
        choices: [
            "anti-lock brake system (ABS)",
            "electronic stability control (ESC)",
            "door locks system",
            "traction control system (TCS)"
        ],
        correctAnswer: 1,
        explanation: "ESC is specifically designed to correct a vehicle's motion and prevent it from skidding or losing control in a turn."
    },
    {
        id: "q_38",
        category: "Repair Procedures",
        level: "Level 4",
        question: "Which of the following is among the basic tests an automotive technician should do before confirming what is needed to repair?",
        choices: [
            "chassis dynamometer",
            "dynamometer test",
            "bore inspection",
            "visual inspection"
        ],
        correctAnswer: 3,
        explanation: "A visual inspection is the most basic and fundamental test performed before any other diagnostic steps."
    },
    {
        id: "q_39",
        category: "Repair Procedures",
        level: "Level 4",
        question: "Technical information, except:",
        choices: [
            "organizational quality standard",
            "personal skill",
            "manufacture specification",
            "industry standard"
        ],
        correctAnswer: 1,
        explanation: "Personal skill is an attribute of a person, not a form of technical information or documentation."
    },
    {
        id: "q_40",
        category: "Safety and Security",
        level: "Level 4",
        question: "Driving management system on a vehicle, except:",
        choices: [
            "traction control system (TCS)",
            "door locks system",
            "anti-lock brake system (ABS)",
            "electronic stability control (ESC)"
        ],
        correctAnswer: 1,
        explanation: "Door locks are a convenience and security feature, not part of the active driving management system."
    },
    {
        id: "q_41",
        category: "Electrical Systems",
        level: "Level 4",
        question: "Technician 'A' says that 3-brush wiper motors allow the motor in the forward and reverse direction for hidden wipers. Technician 'B' says the 3 brushes are used to provide high/low speed control. Who is correct?",
        choices: [
            "both technical A & B",
            "technical A only",
            "technical B only",
            "neither technical A nor B"
        ],
        correctAnswer: 2,
        explanation: "The third brush on a 3-brush wiper motor is used to provide a low-speed circuit path for the motor."
    },
    {
        id: "q_42",
        category: "Electrical Systems",
        level: "Level 4",
        question: "Referring to a window grid diagram, if a voltmeter shows 12.6 volts on both the right and left sides of defogger grid lines, this indicates:",
        choices: [
            "an open ground connection",
            "normal readings",
            "a single grid has on open",
            "an open in the B side of the circuit"
        ],
        correctAnswer: 0,
        explanation: "Equal voltage on both sides of a component indicates that there is no voltage drop across it, which typically means the circuit is open at the ground side."
    },


    //Arranged Questions three

    {
        id: "q_1",
        category: "Management and Planning",
        level: "Level 4",
        question: ".....................can be defined as an act involves mental process at a conscious level in choosing the course of desired result:",
        choices: [
            "Organizing",
            "Directing",
            "Deciding",
            "Stuff"
        ],
        correctAnswer: 2,
        explanation: "Decision-making is the mental process of choosing a course of action from several alternatives to achieve a desired outcome."
    },
    {
        id: "q_2",
        category: "Hydraulic Systems",
        level: "Level 4",
        question: "One of the following is not a purpose of a hydraulic gun.",
        choices: [
            "Create a vacuum",
            "Convert hydraulic to mechanical energy",
            "Develop hydraulic pressure",
            "Convert mechanical to hydraulic energy"
        ],
        correctAnswer: 0,
        explanation: "Hydraulic systems work by developing pressure to create force, not by creating a vacuum."
    },
    {
        id: "q_3",
        category: "Engine Management",
        level: "Level 4",
        question: "A working oxygen sensor tip has a............................... color.",
        choices: [
            "White",
            "Black",
            "Red",
            "Light gray"
        ],
        correctAnswer: 3,
        explanation: "A healthy, properly functioning oxygen sensor tip will typically have a light gray or tan color."
    },
    {
        id: "q_4",
        category: "Workplace Skills",
        level: "Level 4",
        question: "One of the following does not include the OHS requirement",
        choices: [
            "Use of hand tools and equipment",
            "Workplace and safety",
            "Workplace and safety planning of activities",
            "Protective clothing and equipment"
        ],
        correctAnswer: 0,
        explanation: "While OHS has requirements for the use of tools, 'Workplace and safety' and 'Protective clothing' are the direct requirements themselves."
    },
    {
        id: "q_5",
        category: "Steering and Suspension",
        level: "Level 4",
        question: "All are the modification requirement of a steering system except",
        choices: [
            "Proper steering effort",
            "Reduce transmission of shock from the road surface",
            "Smooth recovery",
            "Excellent maneuverability"
        ],
        correctAnswer: 3,
        explanation: "Proper steering effort, shock reduction, and smooth recovery are all specific technical goals, while 'excellent maneuverability' is a more general result of these modifications."
    },
    {
        id: "q_6",
        category: "Vehicle Performance",
        level: "Level 4",
        question: "The following modifications increase vehicle speed except",
        choices: [
            "Increase the number of gear shifts",
            "Modified large rotor head diameter",
            "Modified large piston diameter",
            "Modified large wheel diameter"
        ],
        correctAnswer: 1,
        explanation: "Brake rotor diameter is related to braking performance, not increasing vehicle speed."
    },
    {
        id: "q_7",
        category: "Management and Planning",
        level: "Level 4",
        question: "The following are functions of management except",
        choices: [
            "Decision making",
            "Planning",
            "Organizing",
            "Advertising"
        ],
        correctAnswer: 3,
        explanation: "Advertising is a function of marketing, not a core function of management."
    },
    {
        id: "q_8",
        category: "Management and Planning",
        level: "Level 4",
        question: "How do you determine the human resources involved for your project",
        choices: [
            "Assess the skill and the number of employees needed for the work",
            "Feedback from the department",
            "Asking a colleague",
            "Interest of the manager"
        ],
        correctAnswer: 0,
        explanation: "The most systematic way is to assess the project's needs and determine the required skills and number of people."
    },
    {
        id: "q_9",
        category: "Management and Planning",
        level: "Level 4",
        question: "which of the following is not categorized as a resource",
        choices: [
            "Staff",
            "Equipment",
            "Organizing",
            "Sales target"
        ],
        correctAnswer: 2,
        explanation: "'Organizing' is a process, whereas staff, equipment, and even a sales target can be considered resources."
    },
    {
        id: "q_10",
        category: "Electrical Systems",
        level: "Level 4",
        question: "In electronics the use of a multimeter (volts, ohms) is for:",
        choices: [
            "To test the fuel pump output",
            "To test the sensors/actuators",
            "To test the battery charge",
            "To test the carburetor discharge"
        ],
        correctAnswer: 1,
        explanation: "A multimeter is used to diagnose electrical issues in sensors and actuators by measuring their voltage, resistance, and current."
    },
    {
        id: "q_11",
        category: "Vehicle Systems",
        level: "Level 4",
        question: "Which one of the following is not an engine system?",
        choices: [
            "Charging system",
            "Brake system",
            "Cooling system",
            "Fuel system"
        ],
        correctAnswer: 1,
        explanation: "The brake system is a part of the chassis and safety systems, not the engine itself."
    },
    {
        id: "q_12",
        category: "Engine Management",
        level: "Level 4",
        question: "Which component of the engine management system is not a sensor?",
        choices: [
            "Transmission fluid sensor",
            "Knock sensor",
            "Crank shaft position sensor",
            "Hot air flow sensor"
        ],
        correctAnswer: 0,
        explanation: "A transmission fluid sensor is part of the transmission control system, which is distinct from the engine management system."
    },
    {
        id: "q_13",
        category: "Engine Management",
        level: "Level 4",
        question: "Why we use ECU computer and software on a vehicle?",
        choices: [
            "To write and to read document we store",
            "To assess and work on maintenance",
            "Settings targets and interpreting financial documents and reports",
            "To record and manage data and to produce reports"
        ],
        correctAnswer: 3,
        explanation: "The ECU's primary function is to process data from sensors and produce control outputs, which is essentially recording and managing data to produce results."
    },
    {
        id: "q_14",
        category: "Management and Planning",
        level: "Level 4",
        question: "Resources exclude:",
        choices: [
            "Staff",
            "Money",
            "Equipment",
            "Customer"
        ],
        correctAnswer: 3,
        explanation: "Customers are the recipients of a business's services or products, not a resource used to produce them."
    },
    {
        id: "q_15",
        category: "Drivetrain",
        level: "Level 4",
        question: "In an automatic transmission, the shifting range is according to all of the following except:",
        choices: [
            "P - parking positions",
            "R - reverse position",
            "N - neutral",
            "A - automatic"
        ],
        correctAnswer: 3,
        explanation: "'A' is not a standard gear selector position on a typical automatic transmission; 'D' (Drive) is used instead."
    },
    {
        id: "q_16",
        category: "Mechanical Systems",
        level: "Level 4",
        question: "Mechanical modification may not include:",
        choices: [
            "Adapting or modifying the mechanical system(s)",
            "Adapting vehicle mechanical systems for different work",
            "Adapting existing mechanical systems to new technology",
            "Adapting or modifying electro-mechanical systems"
        ],
        correctAnswer: 3,
        explanation: "Mechanical modification refers to physical changes to mechanical parts. Adapting 'electro-mechanical' systems is a broader field that includes electrical and electronic aspects."
    },
    {
        id: "q_17",
        category: "Workplace Skills",
        level: "Level 4",
        question: "Team communication and cooperation exclude:",
        choices: [
            "Manual concern",
            "Leadership decision",
            "Open communication",
            "Sharing information"
        ],
        correctAnswer: 0,
        explanation: "'Manual concern' is not a recognized term related to team communication. Open communication and sharing information are essential, while leadership decisions guide the team's efforts."
    },
    {
        id: "q_18",
        category: "Workplace Skills",
        level: "Level 4",
        question: "When we say literacy skills, we mean:",
        choices: [
            "To interpret legal requirements, company policies, and procedures in day-to-day demands",
            "Assessing the work outcomes",
            "Identifying appropriate resources and monitoring work",
            "For performance information, setting targets and interpreting financial documents and reports"
        ],
        correctAnswer: 0,
        explanation: "Literacy skills involve the ability to read, understand, and apply written information like policies and procedures."
    },
    {
        id: "q_19",
        category: "Management and Planning",
        level: "Level 4",
        question: "Planning skills are needed to:",
        choices: [
            "To organize required resources and equipment",
            "To provide support to colleagues",
            "To organize information, assess information",
            "To conduct small group training sessions"
        ],
        correctAnswer: 0,
        explanation: "A key part of planning is organizing the resources and equipment necessary to complete a task."
    },
    {
        id: "q_20",
        category: "Steering and Suspension",
        level: "Level 4",
        question: "Which of the following is not a feature of an air suspension system?",
        choices: [
            "Self damping",
            "Improves ride comfort, and greater safety of load",
            "Constant vehicle height regardless of the load",
            "Progressive spring characteristics"
        ],
        correctAnswer: 0,
        explanation: "Air suspension systems do not provide self-damping; separate shock absorbers are still required for this function."
    },
    {
        id: "q_21",
        category: "Safety and Security",
        level: "Level 4",
        question: "Which one of the following is not an anti-theft system on a vehicle?",
        choices: [
            "Central locking system",
            "Vehicle immobilizer system",
            "Alarm system",
            "Adaptive cruise control"
        ],
        correctAnswer: 3,
        explanation: "Adaptive cruise control is a driver assistance system, not an anti-theft system."
    },
    {
        id: "q_22",
        category: "Repair Procedures",
        level: "Level 4",
        question: "From the given systematic malfunction diagnosis methods, which one is not a fault indicator?",
        choices: [
            "Asking a personnel manager",
            "Visual check and noise level testing",
            "Fault memory read out",
            "Customer information"
        ],
        correctAnswer: 0,
        explanation: "A personnel manager handles HR matters, not vehicle fault diagnosis."
    },
    {
        id: "q_23",
        category: "Safety and Security",
        level: "Level 4",
        question: "Which one is not included in a driver assistance system?",
        choices: [
            "Cruise control system",
            "Navigation system",
            "Parking assistance system",
            "Air bag system"
        ],
        correctAnswer: 3,
        explanation: "Airbags are a passive safety system designed to protect occupants during a crash, not an active driver assistance system."
    },
    {
        id: "q_24",
        category: "Electrical Systems",
        level: "Level 4",
        question: "Which is not a feature of data bus transmission in a motor vehicle?",
        choices: [
            "Transmit information using information (bits)",
            "Less space required for wire harnesses",
            "At least two lines required for each piece of information",
            "Extended electronic dynamics capability of actuators"
        ],
        correctAnswer: 2,
        explanation: "A data bus is designed to transmit many pieces of information over a small number of wires, reducing the need for separate lines for each signal."
    },
    {
        id: "q_25",
        category: "Management and Planning",
        level: "Level 4",
        question: "Which one indicates the right order?",
        choices: [
            "Planning - organizing - evaluating - controlling",
            "Controlling - organizing - evaluating - planning",
            "Planning - organizing - controlling - evaluating",
            "Planning - evaluating - controlling - organizing"
        ],
        correctAnswer: 2,
        explanation: "The standard management cycle is Planning, Organizing, Leading/Directing, and Controlling. 'Evaluating' is often a component of 'Controlling'."
    },
    {
        id: "q_26",
        category: "Drivetrain",
        level: "Level 4",
        question: "Electronic drive management system does not include:",
        choices: [
            "Electronic controls of automatic transmission",
            "Electronic components of drive line control system",
            "4WD applications such as automatic freewheeling hubs, differential and axle",
            "Electronic controlled steering system"
        ],
        correctAnswer: 3,
        explanation: "Electronic controlled steering is a separate system from the electronic drive management, which focuses on the transmission and drivetrain."
    },
    {
        id: "q_27",
        category: "Management and Planning",
        level: "Level 4",
        question: "The following are the responsibility of the operations manager except:",
        choices: [
            "Setting measurable objectives",
            "Planning work activities",
            "Implementing the plan",
            "Work as a technical staff"
        ],
        correctAnswer: 3,
        explanation: "An operations manager's role is to oversee and lead, not to perform the hands-on work of a technical staff member."
    },
    {
        id: "q_28",
        category: "Drivetrain",
        level: "Level 4",
        question: "Electronically constructed transmission and powertrain management system include all except:",
        choices: [
            "Automatic transmission",
            "Differential and axle lock",
            "Transmission synchronizer",
            "Automatic freewheel hub"
        ],
        correctAnswer: 2,
        explanation: "A transmission synchronizer is a mechanical component found in manual transmissions, not typically a part of electronically constructed systems."
    },
    {
        id: "q_29",
        category: "Repair Procedures",
        level: "Level 4",
        question: "Preparing for diagnosis of automotive vehicle procedures are:",
        choices: [
            "Listening problems - inspection - information gathering - selecting probable cause",
            "Inspection - information gathering - listening problems - selecting probable cause",
            "Information gathering - inspection - listening problems - selecting probable cause",
            "Information gathering - listening problems - selecting probable cause - inspection"
        ],
        correctAnswer: 2,
        explanation: "The correct sequence is to first gather information from the customer, then perform a visual inspection, and then identify and isolate the problem."
    },
    {
        id: "q_30",
        category: "Workplace Skills",
        level: "Level 4",
        question: "The following are a list of customers except:",
        choices: [
            "Internal and external customer",
            "Competitor",
            "Board member",
            "Supervisor"
        ],
        correctAnswer: 1,
        explanation: "A competitor is a rival business, not a customer."
    },
    {
        id: "q_31",
        category: "Repair Procedures",
        level: "Level 4",
        question: "The importance of tagging and making decisions on components is:",
        choices: [
            "To write the part number of the component",
            "To save time of tracking their prior position",
            "To install back to their original position",
            "To put parts randomly"
        ],
        correctAnswer: 2,
        explanation: "Tagging components ensures they are reinstalled in their correct original location, which is crucial for proper function and wear."
    },
    {
        id: "q_32",
        category: "Repair Procedures",
        level: "Level 4",
        question: "To loosen cylinder head and crank shaft main journal bolts you start:",
        choices: [
            "At the center and loose outwards to the end",
            "At any point and loose cross-wise",
            "At left end and move to the right in parallel",
            "From outside and loosen inwards to the center"
        ],
        correctAnswer: 3,
        explanation: "Loosening these bolts from the outside inward ensures that tension is released evenly, preventing warpage."
    },
    {
        id: "q_33",
        category: "Engine Maintenance",
        level: "Level 4",
        question: "What happens if the engine oil is not changed on its planned service time?",
        choices: [
            "Increase the life span of an engine",
            "Increase the power of an engine",
            "Increase engine part wear",
            "Reduce maintenance cost"
        ],
        correctAnswer: 2,
        explanation: "Old, dirty engine oil loses its lubricating properties, leading to increased friction and wear on internal engine parts."
    },
    {
        id: "q_34",
        category: "Engine Maintenance",
        level: "Level 4",
        question: "Crank pin taperness can be obtained by:",
        choices: [
            "Measuring crank pin diameter at two ends and taking the difference",
            "Measuring crank pin diameter at center along two axis and taking the difference",
            "Measuring crank pin diameter and cornering and diameter center and taking the difference",
            "Measuring crank pin diameter at one end along two axis and taking the difference"
        ],
        correctAnswer: 0,
        explanation: "To measure taper, you must measure the diameter at two different points along the length of the pin and calculate the difference."
    },
    {
        id: "q_35",
        category: "Repair Procedures",
        level: "Level 4",
        question: "The importance of a leakage tester is:",
        choices: [
            "To measure the mechanical resistance of an engine",
            "To know the amount of carbon deposit in an engine combustion chamber",
            "To identify and pinpoint the problem area",
            "To know the compression pressure of the engine cylinder"
        ],
        correctAnswer: 2,
        explanation: "A leakage tester helps pinpoint the source of a cylinder pressure leak (e.g., rings, valves, head gasket) by pressurizing the cylinder and listening for the escaping air."
    },
    {
        id: "q_36",
        category: "Engine Management",
        level: "Level 4",
        question: "Black exhaust gas released from a diesel engine indicates:",
        choices: [
            "Lean mixture",
            "Oil entering the combustion chamber",
            "Rich mixture",
            "Worn piston ring"
        ],
        correctAnswer: 2,
        explanation: "Black smoke from a diesel engine is a classic sign of a rich air-fuel mixture, meaning there is not enough air for complete combustion."
    },
    {
        id: "q_37",
        category: "Engine Theory",
        level: "Level 4",
        question: "In a four-cylinder, four-stroke engine with a firing order of 1-3-4-2, if cylinder no. 2 is at the end of compression, what would be the condition of the intake valve of the third cylinder?",
        choices: [
            "About to close",
            "Fully open",
            "Start of open",
            "Totally closed"
        ],
        correctAnswer: 2,
        explanation: "Due to the firing order (1-3-4-2) and a 180° firing interval, when cylinder 2 is at TDC on its compression stroke, cylinder 3 is at TDC on its exhaust stroke, with the intake valve just beginning to open."
    },
    {
        id: "q_38",
        category: "Management and Planning",
        level: "Level 4",
        question: "Which one of the following is not a resource:",
        choices: [
            "Power",
            "Energy",
            "Customer",
            "All"
        ],
        correctAnswer: 2,
        explanation: "A customer is not a resource used by a business; they are the consumer of its products or services."
    },
    {
        id: "q_39",
        category: "Drivetrain",
        level: "Level 4",
        question: "In an automatic transmission, a torque converter performs via:",
        choices: [
            "Gas power",
            "Mechanical linkage",
            "Electric power",
            "Fluid power"
        ],
        correctAnswer: 3,
        explanation: "A torque converter uses hydraulic fluid to transfer power from the engine to the transmission, functioning as a form of fluid coupling."
    },
    {
        id: "q_40",
        category: "Engine Management",
        level: "Level 4",
        question: "An engine is running so rich, indicated by black smoke coming out the tailpipe. In this typical case, the engine is not idling and the problem is not intermittent. What could be the most likely cause?",
        choices: [
            "MAP sensor hooked",
            "Thermostat keeps engine too cold",
            "Oxygen sensor dead",
            "Fuel pressure way too high"
        ],
        correctAnswer: 3,
        explanation: "Excessively high fuel pressure would cause a consistently rich condition across all engine speeds, leading to black smoke."
    },
    {
        id: "q_41",
        category: "Electrical Systems",
        level: "Level 4",
        question: "If a temperature warning lamp is on while the engine is cranking, the most likely case is:",
        choices: [
            "Prove-out (test) circuit grounds the lamp",
            "Sending unit contacts are closed",
            "Sending unit contacts are open",
            "Sending unit resistance is low"
        ],
        correctAnswer: 0,
        explanation: "The 'prove-out' or self-test circuit is designed to briefly illuminate all warning lights on startup to confirm the bulbs are functional. This is a normal test."
    },
    {
        id: "q_42",
        category: "Workplace Skills",
        level: "Level 4",
        question: "A customer comes in for a 30,000-mile service. While completing the service, the technician notes that the vehicle will soon need the front brake pads replaced. Which of these is the best way to address this need with the customer?",
        choices: [
            "Note the technician comments on the customer repair order",
            "Call the customer and offer to complete the repair, explaining why it is needed"
        ],
        correctAnswer: 1,
        explanation: "Proactively communicating with the customer about a needed repair, including the reason, is the best practice for good customer service."
    },

    //Arranged Questions Four

    {
        id: "q_1",
        category: "General Vehicle Knowledge",
        level: "Level IV",
        question: "The service time/mileage of a vehicle is indicated by:",
        choices: [
            "the speedometer",
            "the odometer",
            "the trip meter",
            "tachometer"
        ],
        correctAnswer: 1,
        explanation: "The odometer records the total distance a vehicle has traveled, which is the primary metric for service intervals."
    },
    {
        id: "q_2",
        category: "Workplace Skills",
        level: "Level IV",
        question: "A desirable trait that will help the worker to be successful in the job is:",
        choices: [
            "dishonest",
            "insincere",
            "irresponsible",
            "fallibility"
        ],
        correctAnswer: 3,
        explanation: "Note: The question seems to have an error as all options are generally considered undesirable. 'Fallibility' is the state of being prone to error, which, while not a positive trait, is a human condition. The other options are negative behaviors. A more appropriate answer might have been 'reliability'."
    },
    {
        id: "q_3",
        category: "Engine Management",
        level: "Level IV",
        question: "Without an RPM signal to the computer in an EFI engine, what happens?",
        choices: [
            "the system will go into back up mode",
            "the engine will not run",
            "the engine will run but it will be sluggish",
            "the engine will start, but run very rich"
        ],
        correctAnswer: 1,
        explanation: "The Engine Control Unit (ECU) needs an RPM signal from the crankshaft position sensor to time the spark and fuel injection. Without this signal, the engine cannot run."
    },
    {
        id: "q_4",
        category: "Engine Management",
        level: "Level IV",
        question: "Which of the following sensors directly measures engine load?",
        choices: [
            "manifold absolute pressure sensor",
            "coolant sensor",
            "throttle position sensor",
            "vehicle speed sensor"
        ],
        correctAnswer: 0,
        explanation: "The Manifold Absolute Pressure (MAP) sensor measures the pressure inside the intake manifold, which is a direct indicator of engine load."
    },
    {
        id: "q_5",
        category: "Safety and Security",
        level: "Level IV",
        question: "Traction control will intervene to maintain vehicle stability, and the control attractive force can use a number of methods as indicated below except:",
        choices: [
            "transmission control",
            "ignition control",
            "brake effect",
            "throttle control"
        ],
        correctAnswer: 0,
        explanation: "Traction control (TCS) primarily uses brake intervention, ignition timing, and throttle control to prevent wheel spin. It does not typically control the transmission directly."
    },
    {
        id: "q_6",
        category: "Management and Planning",
        level: "Level IV",
        question: "A number of trucks with different maintenance needs have arrived. Which would you give priority if you have a lack of labor force?",
        choices: [
            "truck A which has 2000 km left for its annual service",
            "truck B which has 2000 km left for preventive maintenance",
            "truck C which its service time is reached but it is unloaded",
            "truck D which is loaded and its service time has reached"
        ],
        correctAnswer: 3,
        explanation: "The most urgent priority is a loaded truck that is overdue for service, as it impacts both safety and ongoing business operations."
    },
    {
        id: "q_7",
        category: "Drivetrain",
        level: "Level IV",
        question: "Electronic control of automatic gear selection depends on all of the following except:",
        choices: [
            "engine torque",
            "throttle valve",
            "vehicle speed",
            "none"
        ],
        correctAnswer: 0,
        explanation: "While engine torque is a factor, the primary direct inputs for the transmission control module are the throttle valve position and vehicle speed. Engine torque is often a calculated value based on other inputs."
    },
    {
        id: "q_8",
        category: "Diagnosis and Tools",
        level: "Level IV",
        question: "A tool used to diagnose the vehicle's microprocessor in electronic automobiles is:",
        choices: [
            "a scanning tool",
            "a multimeter",
            "a micrometer",
            "a dynamometer"
        ],
        correctAnswer: 0,
        explanation: "A scan tool is a specialized device used to communicate with the vehicle's ECU to read codes and perform diagnostics."
    },
    {
        id: "q_9",
        category: "Electrical Systems",
        level: "Level IV",
        question: "A technician tests the battery on a vehicle and reads 12.6 volts on both the right and left sides. What is the most likely conclusion?",
        choices: [
            "open ground electric wire",
            "defective battery",
            "defective electric circuit",
            "normal battery"
        ],
        correctAnswer: 0,
        explanation: "If a voltmeter reads the same voltage on both sides of a circuit, it indicates there is no current flowing and the circuit is open, most likely at the ground connection."
    },
    {
        id: "q_10",
        category: "Management and Planning",
        level: "Level IV",
        question: "The first step of the management process is:",
        choices: [
            "resource",
            "setting goals",
            "manage time",
            "list the infrastructure"
        ],
        correctAnswer: 1,
        explanation: "Planning is the first stage of management, which involves setting goals and objectives."
    },
    {
        id: "q_11",
        category: "Engine Management",
        level: "Level IV",
        question: "A technician observes an EFI engine with black exhaust smoke, identifying a rich mixture. There is no information sent to the engine computer, and vehicle power is reduced. The technician decides the cause is:",
        choices: [
            "throttle valve defective",
            "coolant temperature sensor overheat",
            "knock sensor",
            "dead of oxygen sensor"
        ],
        correctAnswer: 3,
        explanation: "A dead oxygen sensor provides no feedback to the ECU, causing the engine to run in a rich, 'limp mode' to prevent damage, which results in black smoke and reduced power."
    },
    {
        id: "q_12",
        category: "Drivetrain",
        level: "Level IV",
        question: "Which one is a common feature of both automatic and manual gear transmissions?",
        choices: [
            "hand brake",
            "shift lever",
            "torque converter",
            "clutch"
        ],
        correctAnswer: 3,
        explanation: "Both manual and automatic transmissions use clutches, though a manual has a single, driver-operated clutch, while an automatic uses multiple internal clutches and bands."
    },
    {
        id: "q_13",
        category: "Workplace Skills",
        level: "Level IV",
        question: "Quality standards include all of the following except:",
        choices: [
            "ambiguous",
            "efficient",
            "exclusive",
            "ambitious"
        ],
        correctAnswer: 0,
        explanation: "Quality standards must be clear and unambiguous to be effective. The others are traits of good standards."
    },
    {
        id: "q_14",
        category: "Convenience Systems",
        level: "Level IV",
        question: "Which of the following is a convenience system on a vehicle?",
        choices: [
            "anti-lock brake",
            "steering column adjustment",
            "traction control",
            "air conditioning"
        ],
        correctAnswer: 3,
        explanation: "Air conditioning is a comfort and convenience system. The others are safety or control systems."
    },
    {
        id: "q_15",
        category: "Diagnosis and Tools",
        level: "Level IV",
        question: "A diagnostic instrument designed to communicate with the vehicle computer is a:",
        choices: [
            "multimeter",
            "hydrometer",
            "scan tool",
            "dynamometer"
        ],
        correctAnswer: 2,
        explanation: "A scan tool is the correct instrument for communicating with the vehicle's ECU to read and clear fault codes and view live data."
    },
    {
        id: "q_16",
        category: "Diagnosis and Tools",
        level: "Level IV",
        question: "What is the correct diagnosis order for electronic-controlled vehicle service?",
        choices: [
            "conduct inspection, prepare vehicle, get guidance, test performance",
            "prepare vehicle, conduct inspection, get guidance, test performance",
            "test performance, prepare vehicle, conduct inspection, get guidance",
            "prepare vehicle, get guidance, conduct inspection, test performance"
        ],
        correctAnswer: 1,
        explanation: "The most logical order is to first prepare the vehicle (e.g., connect equipment), then inspect it, get guidance on the issue, and finally perform tests to confirm the diagnosis."
    },
    {
        id: "q_17",
        category: "Electrical Systems",
        level: "Level IV",
        question: "When testing a rear window defogger grid with a voltmeter:",
        choices: [
            "the voltmeter should show a decrease in voltage across the grid in tested across the glass",
            "the voltage will indicate a pulsing 5 volt signal",
            "the voltmeter should read battery voltage only",
            "only an ammeter is used to read of lamp"
        ],
        correctAnswer: 0,
        explanation: "As you move the voltmeter probe along a working grid line, the voltage reading should decrease, indicating a voltage drop across the resistance of the grid."
    },
    {
        id: "q_18",
        category: "Engine Management",
        level: "Level IV",
        question: "Mass air flow meter is a second component of engine control, but what does it measure?",
        choices: [
            "voltmeter of engine",
            "air density and voltmeter",
            "how test air flow",
            "humidity"
        ],
        correctAnswer: 1,
        explanation: "Note: The question is poorly phrased. Assuming it asks what a Mass Air Flow sensor measures, the answer is the mass or density of air. So, 'air density' is the closest fit, though the addition of 'voltmeter' is confusing."
    },
    {
        id: "q_19",
        category: "Electrical Systems",
        level: "Level IV",
        question: "The switch for an oil pressure warning light is a:",
        choices: [
            "variable resistor",
            "normally closed switch",
            "thermistor",
            "normally open switch"
        ],
        correctAnswer: 1,
        explanation: "An oil pressure warning light switch is normally closed (circuit is complete) when there is no pressure, turning the light on. When pressure builds, the switch opens, turning the light off."
    },
    {
        id: "q_20",
        category: "Workplace Skills",
        level: "Level IV",
        question: "Being a supervisor or a manager makes you responsible to some extent for the work. You should possess personal qualities that can help you work with others, but one is not. Name it:",
        choices: [
            "display high standard of attendance, honesty and optimism",
            "do quality work",
            "being a fault finder",
            "work hard to reach the goal and monitor your progress"
        ],
        correctAnswer: 2,
        explanation: "A supervisor should focus on coaching and problem-solving, not just finding faults in others."
    },
    {
        id: "q_21",
        category: "Workplace Skills",
        level: "Level IV",
        question: "Technical information includes all of the following except:",
        choices: [
            "organizational quality standard",
            "personal skill",
            "manufacture specification",
            "industry standard"
        ],
        correctAnswer: 1,
        explanation: "Personal skill is a human attribute, not a source of technical information."
    },
    {
        id: "q_22",
        category: "Electrical Systems",
        level: "Level IV",
        question: "All of the following can cause windshield wipers to fail to stop (they keep running) in the 'park position' except:",
        choices: [
            "a defective wiper switch",
            "an open park circuit",
            "worn wiper motor brushes",
            "a defective wiper park contact switch"
        ],
        correctAnswer: 2,
        explanation: "Worn brushes would cause the motor to function poorly or fail entirely, not to run continuously after being switched off."
    },
    {
        id: "q_23",
        category: "Engine Management",
        level: "Level IV",
        question: "Which of the following sensors indirectly measures engine load?",
        choices: [
            "coolant sensor",
            "throttle position sensor",
            "manifold absolute pressure sensor",
            "vehicle speed sensor"
        ],
        correctAnswer: 1,
        explanation: "The throttle position sensor (TPS) measures the throttle's opening angle, which is an indirect measure of the driver's request for power (load)."
    },
    {
        id: "q_24",
        category: "Technology",
        level: "Level IV",
        question: "Which of the following elaborates the concept of new technology appropriately?",
        choices: [
            "utilize the existing system",
            "solving the problems of societies",
            "increasing cost consumption",
            "increasing human effort"
        ],
        correctAnswer: 1,
        explanation: "The primary purpose of new technology is to solve problems and improve efficiency."
    },
    {
        id: "q_25",
        category: "Workplace Skills",
        level: "Level IV",
        question: "Service quality can be related to service potential. 'Service potential' represents:",
        choices: [
            "quickness of work",
            "workers qualification",
            "customer satisfaction",
            "service result"
        ],
        correctAnswer: 1,
        explanation: "Service potential refers to the underlying capability to provide a service, which is directly tied to the worker's qualifications and skills."
    },
    {
        id: "q_26",
        category: "Diagnosis and Tools",
        level: "Level IV",
        question: "When we use a scan tool, it must be programmed for all except:",
        choices: [
            "type of engine",
            "model year of vehicle",
            "make of vehicle",
            "number of cylinders"
        ],
        correctAnswer: 3,
        explanation: "A scan tool is typically configured by make, model, and year. While the number of cylinders is important for some diagnostics, it is often not a primary programming parameter like the others."
    },
    {
        id: "q_27",
        category: "Workplace Skills",
        level: "Level IV",
        question: "A customer comes in for a 30,000-mile service. A technician notes the front brake pads will soon need replacement. Which is the best way to address this with the customer?",
        choices: [
            "input the technician's comments in the dealership's database for review at the next service",
            "call the customer and offer to complete the repair, explaining why it is needed",
            "note the technician's comments on the customer's repair order"
        ],
        correctAnswer: 1,
        explanation: "Proactively calling the customer and explaining the issue is the best way to provide excellent customer service and ensure safety."
    },
    {
        id: "q_28",
        category: "Electrical Systems",
        level: "Level IV",
        question: "Technician A says that a 3-brush wiper motor allows the motor in the forward and reverse direction for hidden wipers. Technician B says the 3 brushes are used to provide high/low speed control. Who is correct?",
        choices: [
            "both technician A & B",
            "technician A only",
            "technician B only",
            "neither technician A nor B"
        ],
        correctAnswer: 2,
        explanation: "The third brush in a wiper motor is used to provide a lower speed for the motor."
    },
    {
        id: "q_29",
        category: "Maintenance",
        level: "Level IV",
        question: "A programmed maintenance which is carried out before the occurrence of failure or to detect failure before they develop to a breakdown is referred to as:",
        choices: [
            "preventive maintenance",
            "corrective maintenance",
            "improvement maintenance",
            "condition-based maintenance"
        ],
        correctAnswer: 0,
        explanation: "This is the classic definition of preventive maintenance, which is performed at a scheduled time to prevent a breakdown."
    }
    ];