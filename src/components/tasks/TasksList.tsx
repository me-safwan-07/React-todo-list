import styled from "@emotion/styled";

export const TasksList = () => {
    <NoTasks>
        <b>You don't have any tasks yet</b>
        <br />
        Click on the <br>+</br> button to add one
    </NoTasks>
};

const NoTasks = styled.div`
    text-align: center;
    postion: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100vw;
    opacity: 0.9;
    font-size: 18px;
`