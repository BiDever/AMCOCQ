//const allAutomotiveQuestions = [
const questions = [
    {
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
    }
];
