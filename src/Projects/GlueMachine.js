import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import Subheading from '../Components/Subheading.js';
import FullRowImage from '../Components/FullRowImage.js';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function GlueMachine(props) {
    const thirdPicStyle = {
        maxHeight: '85vh',
        maxWidth: '100%'
    };

    const fourthPicStyle = {
        maxHeight: '140vh',
        maxWidth: '100%'
    };

    const firstRowStyle = {
        backgroundColor: '#96bf48',
        color: 'white',
        fontWeight: 'bold'
    };

    return (
        <div>
            <ProjectHeading>Gluing Machine Linkage Dynamics</ProjectHeading>
            <Subheading>Background</Subheading>
            <div className="w-100 container-fluid">
                <FullRowText>
                A friend of mine does small-scale manufacturing and he was upgrading
                his automated operations. One machine he was working on was a
                gluing machine for PVC tees. I was helping him with the general
                workcell design, and he had to choose a motor for the main linkage.
                I took this as an opportunity to do some inverse dynamics to find
                the torque required by the motor, given that he had a desired
                motion profile in mind.
                </FullRowText>
                <div className="row">
                    <div className="col-sm-4">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='PVC Tee'
                            src="project-assets/Glue Machine/Tee.png"
                            style={thirdPicStyle}/>
                    </div>
                    <div className="col-sm-8">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='Rear Isometric View'
                            src="project-assets/Glue Machine/Back Isometric.png"
                            style={thirdPicStyle}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='Labeled Front View'
                            src="project-assets/Glue Machine/FrontLabeled.png"
                            style={fourthPicStyle}/>
                    </div>
                    <div className="col text-start fs-5 d-flex align-items-center">
                        <p>
                        The goal of the machine was to line the inside of the PVC tee
                        (which could be placed horizontally so that both sizes get glue
                        or vertically so that only the stem gets glue) with glue.
                        It should basically make a spiral of glue on the inner edge.
                        This was accomplished with 2 simultaneous motions: the
                        PVC tee rotating about the axis shown on the left, and the
                        glue nozzle moving horizontally out of the tee. The idea
                        here is that if you move the glue nozzle into the tee and
                        then start dispensing while rotating the tee and moving
                        the glue nozzle out, you would get a consistent spiral. 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start fs-5 d-flex align-items-center">
                        <p>
                        In order to get the horizontal motion, this linkage was
                        used. It is effectively a 4-bar linkage between points
                        A, B, C, and D. The motor actuates the drive linkage
                        through axis A. The remaining points (B, C, and D) are
                        passive rotary joints.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='Labeled Front View'
                            src="project-assets/Glue Machine/Top Labeled.png"
                            style={fourthPicStyle}/>
                    </div>
                </div>
                <Subheading>Inverse Kinematics</Subheading>
                <FullRowText>
                    To get approximately a constant horizontal velocity motion
                    at the glue nozzle, we want the angular velocity of the glue
                    arm about point D to be constant. I did some inverse kinematics
                    to get the necessary angular position, velocity, and
                    acceleration profile for the drive joint A to achieve the
                    constant angular velocity of joint D. I found the 
                    relationship <InlineMath math=" \theta_1 = f(\theta_3)"/>
                    analytically and then used SymPy to differentiate and
                    get <InlineMath math="\dot{\theta}_1 = f(\theta_3, \dot{\theta}_3)"/>
                    and <InlineMath math="\ddot{\theta}_1 = f(\theta_3, \dot{\theta}_3, \ddot{\theta}_3)" />.
                    Then I plugged in my desired <InlineMath math="\theta_3(t)"/>
                    and simulated <InlineMath math="\theta_1(t), \dot{\theta}_1(t), \ddot{\theta}_1(t)" />.
                    The linkage in the math model below is a little different than
                    the CAD since the CAD was updated since, but hopefully you
                    can see what I was doing. You can see this in this link (TODO_INSERT_HERE).
                </FullRowText>
                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='Labeled Front View'
                            src="project-assets/Glue Machine/Model.png"
                            style={fourthPicStyle}/>
                    </div>
                    <div className="col-sm-8">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='Labeled Front View'
                            src="project-assets/Glue Machine/InverseKinematicsProfiles.png"
                            style={fourthPicStyle}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start fs-5 d-flex align-items-center">
                        <p>
                            From there, I also analytically came up with the equations for
                            the forward kinematics to
                            get
                            <BlockMath math="\theta_2 = f(\theta_1)" />
                            <BlockMath math="\theta_3 = f(\theta_1)" />
                            <BlockMath math="\dot{\theta}_2 = f(\theta_1, \dot{\theta}_1)"/>
                            <BlockMath math="\dot{\theta}_3 = f(\theta_1, \dot{\theta}_1)"/>
                            <BlockMath math="\ddot{\theta}_2 = f(\theta_1, \ddot{\theta}_1)"/>
                            <BlockMath math="\dot{\theta}_3 = f(\theta_1, \dot{\theta}_1)"/>
                            Then I plugged in my values for <InlineMath math="\theta_1(t), \dot{\theta}_1(t), \ddot{\theta}_1(t)" />
                            from the inverse kinematics and got all the joint profiles.
                            This was both a sanity check on my inverse kinematics as well as
                            being necessary for the inverse dynamics step.
                        </p>
                    </div>
                    <div className="col-sm-8">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='Labeled Front View'
                            src="project-assets/Glue Machine/ForwardKinematics.png"
                            style={fourthPicStyle}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start fs-5 d-flex align-items-center">
                        <p>
                        Then I did a little animation to make sure things all
                        made sense so far.
                        </p>
                    </div>
                    <div className="col-sm-8">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='Animation'
                            src="project-assets/Glue Machine/animation.gif"
                            style={fourthPicStyle}/>
                    </div>
                </div>
                <Subheading>Inverse Dynamics</Subheading>
            </div>
        </div>
    );
}