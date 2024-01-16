import Head from "next/head";
import Header from "components/header";
import styles from "@/styles/clients/index.module.css";
import tools from "@/data/tools.json"
import { useState } from 'react';

export default function Clients() {
    const [continueOnclick, setContinueOnclick] = useState("currentProject");
    const [backOnclick, setBackOnclick] = useState(undefined);
    const [login, setlogin] = useState(true);
    const [loginData, setLoginData] = useState({
        company: undefined,
        username: undefined,
        password: undefined,
    });

    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    };

    const handleTechUsed = () => (e) => {
        const value = e.target.value;
        setTechnology(e.target.value);
    }

    const verifySubmission = (items) => {
        var v = items.map(([tag, name]) => {
            var item = document.querySelector(`${tag}[name="${name}"]`);
            item.style.borderColor = "var(--police-blue)";
            if (item.value == "" || item.value == "Select your company...") {
                item.style.borderColor = "red";
                return false;
            }
            
        });
        return !v.some(element => element === false);
    }

    const continueButton = {
        "clientsPage": () => {
            const login = document.querySelector("#login");
            const loginContainer = login.querySelector("div");
            setContinueOnclick("newProject");
            setBackOnclick(undefined);
            loginContainer.style.maxWidth = '450px';
            login.querySelector("#backbutton").hidden = false;
            loginContainer.querySelectorAll('form label[data-newproject="true"]').forEach((label) => { label.hidden = true; } );
            loginContainer.querySelector('form select[name=company]').hidden = false;
            loginContainer.querySelector('form input[name=company]').hidden = true;
            loginContainer.querySelector('form input[name=password]').hidden = true;
            loginContainer.querySelector("#newproject").style.display = "flex";
            login.querySelector("h3").textContent = "Log In to Your Client Portal";
            login.querySelector("#backbutton").hidden = true;
        },

        "currentProject": () => {
            var v = verifySubmission([["select", "company"], ["input", "username"]]);
            if (!v) return;
            alert("currentProject");
        },

        "newProject": () => {
            const login = document.querySelector("#login");
            const loginContainer = login.querySelector("div");
            loginContainer.querySelector("#newproject").style.display = "none";
            loginContainer.querySelector('form select[name=company]').hidden = true;
            loginContainer.querySelector('form input[name=company]').hidden = false;
            loginContainer.querySelector('form input[name=password]').hidden = false;
            loginContainer.querySelector('form input[name=username]').hidden = false;
            loginContainer.querySelectorAll('form label[data-newproject="true"]').forEach((label) => { label.hidden = false; } );
            login.querySelector("h3").textContent = "Let's Start a New Project";
            setContinueOnclick("companyTypes");
            setBackOnclick("clientsPage");
            loginContainer.style.maxWidth = '800px';
            login.querySelector("#backbutton").hidden = false;
            loginContainer.querySelector('form input[name=companytype]').hidden = true;
            loginContainer.querySelector('#companyTypes').style.display = "none";
        },

        "companyTypes": () => {
            var v = verifySubmission([["input", "company"], ["input", "username"], ["input", "password"]]);
            if (!v) return;
            const login = document.querySelector("#login");
            const loginContainer = login.querySelector("div");
            loginContainer.querySelector('form input[name=company]').hidden = true;
            loginContainer.querySelector('form input[name=username]').hidden = true;
            loginContainer.querySelector('form input[name=password]').hidden = true;
            loginContainer.querySelectorAll('form label[data-newproject="true"]').forEach((label) => { label.hidden = true; } );
            loginContainer.querySelector('form input[name=companytype]').hidden = false;
            loginContainer.querySelector('form div input[name=projectstage]').hidden = true;
            loginContainer.querySelector('#companyTypes').style.display = "flex";
            login.querySelector("h3").textContent = "Describe Your Company";
            setContinueOnclick("projectStages");
            setBackOnclick("newProject");
            loginContainer.querySelector('#projectStages').style.display = "none";
        },

        "projectStages": () => {
            var v = verifySubmission([["input", "companytype"]]);
            if (!v) return;
            const login = document.querySelector("#login");
            const loginContainer = login.querySelector("div");
            loginContainer.querySelector('form input[name=companytype]').hidden = true;
            loginContainer.querySelector('#companyTypes').style.display = "none";
            login.querySelector("h3").textContent = "What Stage Is Your Project In?";
            loginContainer.querySelector('#projectStages').style.display = "flex";
            loginContainer.querySelector('form textarea[name=projectsummary]').hidden = true;
            loginContainer.querySelectorAll('form label[data-companygoals="true"]').forEach((label) => { label.hidden = true; } );
            loginContainer.querySelector('form div input[name=timelinequan]').hidden = true;
            loginContainer.querySelector('form div select[name=timelinequal]').hidden = true;
            loginContainer.querySelector('form div textarea[name=timelinesummary]').hidden = true;
            loginContainer.querySelector('form div textarea[name=technology]').hidden = true;
            loginContainer.querySelector('form div input[name=projectstage]').hidden = false;
            loginContainer.querySelector('form div textarea[name=enduser]').hidden = true;
            setContinueOnclick("companyGoals");
            setBackOnclick("companyTypes");
        },
        
        "companyGoals": () => {
            var v = verifySubmission([["input", "projectstage"]]);
            if (!v) return;
            const login = document.querySelector("#login");
            const loginContainer = login.querySelector("div");
            loginContainer.querySelector('form input[name=projectstage]').hidden = true;
            loginContainer.querySelector('#projectStages').style.display = "none";
            login.querySelector("h3").textContent = "What Are Your Project Goals?";
            loginContainer.querySelector('form textarea[name=projectsummary]').hidden = false;
            loginContainer.querySelectorAll('form label[data-companygoals="true"]').forEach((label) => { label.hidden = false; } );
            loginContainer.querySelector('form div input[name=timelinequan]').hidden = false;
            loginContainer.querySelector('form div select[name=timelinequal]').hidden = false;
            loginContainer.querySelector('form div textarea[name=timelinesummary]').hidden = false;
            loginContainer.querySelector('form div textarea[name=technology]').hidden = false;
            loginContainer.querySelector('form div textarea[name=enduser]').hidden = false;
            setBackOnclick("projectStages");
            setContinueOnclick("techUsed");
            loginContainer.querySelector('#techUsed').style.display = "none";
            loginContainer.querySelector('form div input[name=techused]').hidden = true;
        },

        "techUsed": () => {
            var v = verifySubmission([["textarea", "projectsummary"]]);
            if (!v) return;
            const login = document.querySelector("#login");
            const loginContainer = login.querySelector("div");
            login.querySelector("h3").textContent = "Project Tech Stack";
            loginContainer.querySelector('form textarea[name=projectsummary]').hidden = true;
            loginContainer.querySelectorAll('form label[data-companygoals="true"]').forEach((label) => { label.hidden = true; } );
            loginContainer.querySelectorAll('form label[data-contact="true"]').forEach((label) => { label.hidden = false; } );
            loginContainer.querySelector('form div input[name=timelinequan]').hidden = true;
            loginContainer.querySelector('form div select[name=timelinequal]').hidden = true;
            loginContainer.querySelector('form div textarea[name=timelinesummary]').hidden = true;
            loginContainer.querySelector('form div textarea[name=technology]').hidden = true;
            loginContainer.querySelector('form div textarea[name=enduser]').hidden = true;
            loginContainer.querySelector('form div textarea[name=enduser]').hidden = true;
            setContinueOnclick("projectContact");
            setBackOnclick("companyGoals");
            loginContainer.querySelector('form div input[name=contactname]').hidden = true;
            loginContainer.querySelector('form div input[name=contacttitle]').hidden = true;
            loginContainer.querySelector('form div input[name=contactemail]').hidden = true;
            loginContainer.querySelector('form div input[name=contactphone]').hidden = true;
            loginContainer.querySelectorAll('form label[data-contact="true"]').forEach((label) => { label.hidden = true; } );
            loginContainer.querySelector('#continueButton').textContent = "Continue";
            loginContainer.querySelector('#techUsed').style.display = "flex";
            loginContainer.querySelector('form div input[name=techused]').hidden = false;
        },

        "projectContact": () => {
            var v = verifySubmission([["textarea", "projectsummary"]]);
            if (!v) return;
            const login = document.querySelector("#login");
            const loginContainer = login.querySelector("div");
            login.querySelector("h3").textContent = "Primary Project Contact";
            loginContainer.querySelector('form div input[name=contactname]').hidden = false;
            loginContainer.querySelector('form div input[name=contacttitle]').hidden = false;
            loginContainer.querySelector('form div input[name=contactemail]').hidden = false;
            loginContainer.querySelector('form div input[name=contactphone]').hidden = false;
            setBackOnclick("techUsed");
            setContinueOnclick("createNewProject");
            loginContainer.querySelector('#continueButton').textContent = "Create New Project";
            loginContainer.querySelector('#techUsed').style.display = "none";
            loginContainer.querySelector('form div input[name=techused]').hidden = true;
        },

        "createNewProject": () => {
            var v = verifySubmission([["input", "contactname"],["input", "contacttitle"],["input", "contactemail"],["input", "contactphone"]]);
            if (!v) return;
            const login = document.querySelector("#login");
            const loginContainer = login.querySelector("div");
            loginContainer.querySelector('form div input[name=contactname]').hidden = true;
            loginContainer.querySelector('form div input[name=contacttitle]').hidden = true;
            loginContainer.querySelector('form div input[name=contactemail]').hidden = true;
            loginContainer.querySelector('form div input[name=contactphone]').hidden = true;
            loginContainer.querySelectorAll('form label[data-contact="true"]').forEach((label) => { label.hidden = true; } );
        }
    };

    const companyTypesImmutable = {
        "Tech Startup": {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.011 6.215c-1.711-.009-3.86.918-5.499 2.557a8.852 8.852 0 0 0-1.601 2.174c1.479-1.119 3.057-1.47 4.903-.434a21.67 21.67 0 0 1 2.197-4.297zm9.785 9.773a23.565 23.565 0 0 1-4.297 2.21c1.036 1.848.686 3.424-.434 4.902a8.804 8.804 0 0 0 2.175-1.602c1.644-1.642 2.572-3.796 2.556-5.51zM23.948.042A17.883 17.883 0 0 0 22.735 0C14.133 0 9.237 6.558 7.455 11.833l4.728 4.729C17.611 14.616 24 9.901 24 1.39c0-.439-.017-.888-.052-1.348zm-9.888 9.91a.999.999 0 1 1 1.414-1.414.999.999 0 1 1-1.414 1.414zm2.828-2.828a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm-8.021 8.625 1.013 1.012c-.942.954-1.907 2.083-2.287 3.637l-1.39-.34c.467-1.912 1.607-3.24 2.664-4.309zm-1.634-1.633 1.01 1.01c-1.119 1.103-2.413 2.203-4.307 2.666l-.34-1.39c1.553-.381 2.69-1.35 3.637-2.286zm2.746 6.446c.206 2.029-.946 3.265-2.48 3.421-.902.092-1.701-.205-2.356-.88-1.575.556-3.074-.047-3.864-1.172-.622-.883-.76-2.002-.382-3.074-.676-.656-.973-1.448-.88-2.356.154-1.521 1.361-2.694 3.484-2.475l.21 1.208c-.716.067-1.379.104-1.809.533-.722.723-.504 2.229.851 2.629-.899.904-.813 2.202-.137 2.914.707.747 2.057.863 2.987-.063.416 1.41 1.942 1.537 2.629.851.424-.424.465-1.075.531-1.782l1.216.246z"/></svg>,
            selected: false
        },
        "Enterprise Business": {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.062 13.875-1.625-5.979 3.367-1.092C20.865 2.782 16.764 0 12 0 7.221 0 3.106 2.801 1.176 6.845l3.386 1.051-1.625 5.979L0 13.108C.56 19.216 5.747 24 12 24s11.439-4.784 12-10.892l-2.938.767zM6.236 15.72a.706.706 0 0 1-.151-.987l.806-1.088a.705.705 0 0 1 .986-.151.704.704 0 0 1 .152.987l-.807 1.087c-.217.298-.687.37-.986.152zm1.424 1.04a.697.697 0 0 1-.156-.978l.812-1.096a.704.704 0 0 1 .984-.151c.315.23.385.673.152.986l-.812 1.097c-.212.292-.672.366-.98.142zm1.426 1.04a.707.707 0 0 1-.151-.988l.805-1.086a.707.707 0 0 1 1.138.835l-.805 1.088a.733.733 0 0 1-.987.151zm3.217-.201-.807 1.092a.73.73 0 0 1-.986.151.705.705 0 0 1-.152-.986l.809-1.092a.705.705 0 0 1 1.136.835zM13.046 19a.98.98 0 0 1-.451-.113c.235-.318.579-.742.707-1.044l.159.159c.487.487.127.998-.415.998zm4.922-2.979a.705.705 0 0 1-.998 0l-2.025-2.025a.175.175 0 0 0-.243-.005.175.175 0 0 0-.006.255l1.875 1.876a.705.705 0 1 1-.998.998l-1.523-1.524a.177.177 0 0 0-.25.25l1.264 1.265a.706.706 0 0 1-.997.999l-.654-.654a1.694 1.694 0 0 0-1.53-1.972 1.707 1.707 0 0 0-1.422-1.039 1.71 1.71 0 0 0-1.424-1.04c-.506-1.208-2.158-1.432-2.95-.351l-.44.595a12.07 12.07 0 0 0-1.489-.441l1.273-4.685c1.899-.017 3.396-1.817 5.149-.709-.574.71-1.045 1.277-1.755 1.691a1.42 1.42 0 0 0-.66 1.616c.216.797 1.024 1.354 1.968 1.354 1.248 0 2.54-1.025 3.521-1.761.578.577 3.831 3.775 4.315 4.31a.706.706 0 0 1-.001.997zm.495-1.954s-3.125-3.084-4.053-4.013c-.496-.494-.838-.562-1.41-.101-.728.586-1.619 1.182-2.277 1.413-1.291.452-1.996-.647-1.396-.999 1.22-.711 1.814-1.737 2.839-2.898.284-.322.623-.441.969-.441.376 0 .761.14 1.095.312 1.517.784 2.897 1.319 4.351 1.212l1.296 4.768c-.464.208-.931.45-1.414.747z"/></svg>,
            selected: false
        },
        "Digital Agency": {
            svg:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="m40 52.132-1.445-.964a.995.995 0 0 0-1.109 0L35 52.798l-2.445-1.63a.995.995 0 0 0-1.109 0L29 52.798l-2.445-1.63a.995.995 0 0 0-1.109 0L24 52.132V30h-2v24c0 .269.11.521.295.705l-.002.002 9 9a.997.997 0 0 0 1.414 0l9-9-.002-.002A.995.995 0 0 0 42 54V35h-2v17.132zm-14 1.07 2.445 1.63a.995.995 0 0 0 1.109 0L32 53.202l2.445 1.63a.995.995 0 0 0 1.109 0L38 53.202l1.43.953L35.586 58h-7.172l-3.844-3.844 1.43-.954zm6 8.384L30.414 60h3.172L32 61.586zM19.093 21.287a1.002 1.002 0 0 0-.808-.681l-2.898-.422-1.297-2.627c-.336-.684-1.457-.684-1.793 0L11 20.185l-2.898.422a1.002 1.002 0 0 0-.555 1.705l2.098 2.045-.495 2.888c-.064.375.09.754.397.978a.995.995 0 0 0 1.054.076l2.593-1.363 2.593 1.363a1 1 0 0 0 1.451-1.054l-.495-2.888 2.098-2.045c.271-.266.369-.664.252-1.025zm-4.123 2.004a1 1 0 0 0-.287.885l.241 1.409-1.265-.665a.998.998 0 0 0-.932 0l-1.265.665.241-1.409a1 1 0 0 0-.287-.885l-1.023-.997 1.414-.206a1 1 0 0 0 .753-.547l.633-1.281.633 1.281a1 1 0 0 0 .753.547l1.414.206-1.023.997zm3.097-14.658-.619 3.611a1 1 0 0 0 1.451 1.054l3.242-1.705 3.242 1.705a1 1 0 0 0 1.451-1.054l-.619-3.611 2.624-2.558a1.001 1.001 0 0 0-.555-1.705l-3.624-.527L23.038.558c-.336-.684-1.457-.684-1.793 0l-1.621 3.285-3.626.527a1.002 1.002 0 0 0-.555 1.705l2.624 2.558zm2.365-2.887a1 1 0 0 0 .753-.547l.957-1.939.958 1.939a1 1 0 0 0 .753.547l2.14.312-1.549 1.51a1 1 0 0 0-.287.885l.365 2.133-1.914-1.007a.998.998 0 0 0-.932 0l-1.914 1.007.365-2.133a1 1 0 0 0-.287-.885l-1.549-1.51 2.141-.312zm25.284 9.317 4.124-4.02a1.001 1.001 0 0 0-.555-1.705l-5.698-.828-2.549-5.163c-.336-.684-1.457-.684-1.793 0L36.696 8.51l-5.698.829a1.002 1.002 0 0 0-.555 1.705l4.124 4.02-.974 5.676a.997.997 0 0 0 1.451 1.054l5.097-2.68 5.097 2.68a1 1 0 0 0 1.451-1.054l-.973-5.677zm-1.773-1.065a1 1 0 0 0-.287.885l.72 4.197-3.769-1.981a.998.998 0 0 0-.932 0l-3.769 1.981.72-4.197a1 1 0 0 0-.287-.885l-3.049-2.972 4.213-.613a1 1 0 0 0 .753-.547l1.885-3.817 1.885 3.817a1 1 0 0 0 .753.547l4.213.613-3.049 2.972zm13.188 12.226-2.535-.368-1.135-2.298c-.336-.684-1.457-.684-1.793 0l-1.134 2.298-2.536.368a1 1 0 0 0-.555 1.705l1.836 1.789-.434 2.526a1.002 1.002 0 0 0 .985 1.169c.159 0 .319-.038.466-.115l2.268-1.192 2.268 1.192a1 1 0 0 0 1.451-1.054l-.433-2.526 1.835-1.789a.998.998 0 0 0-.554-1.705zm-3.053 2.429a1 1 0 0 0-.287.885l.179 1.047-.939-.494a.998.998 0 0 0-.932 0l-.939.494.18-1.047a1 1 0 0 0-.287-.885l-.761-.742 1.051-.152a1 1 0 0 0 .753-.547l.47-.952.471.952c.146.296.427.5.753.547l1.051.152-.763.742z"/><path d="M29 37h2c0-7.168-5.383-13-12-13v2c5.514 0 10 4.935 10 11zm6 5h2c0-7.047 3.206-13 7-13v-2c-5.047 0-9 6.589-9 15zm-8-17h2c0-2.206 1.346-4 3-4v-2c-2.757 0-5 2.691-5 6zm-7-9c1.654 0 3 1.794 3 4h2c0-3.309-2.243-6-5-6v2zm21 8v-2c-4.963 0-9 4.486-9 10h2c0-4.411 3.141-8 7-8zm-6 20h2v2h-2zm-3-10h2v2h-2zm-3 5h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM12 30h2v2h-2zM0 16h2v2H0zm8-4h2v2H8zm41 5h2v2h-2zm11-7h2v2h-2zM4 5h2v2H4zm7-1h2v2h-2zm37-1h2v2h-2zm6 8h2v2h-2zM4 24H2v2H0v2h2v2h2v-2h2v-2H4zm57-8h-2v2h-2v2h2v2h2v-2h2v-2h-2zm0-16c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/><g/></svg>,
            selected: false,
        }
    }
    const [companyTypes, setCompanyTypes] = useState(companyTypesImmutable);

    const projectStagesImmutable = {
        "Planning & Early Development": {
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M2.458 9.012a10.01 10.01 0 0 0-.458 3c0 5.52 4.481 10 10 10 5.52 0 10-4.48 10-10 0-5.519-4.48-10-10-10a9.944 9.944 0 0 0-5.703 1.796L8 6.012H1.42L3.355 0l1.718 2.223A11.931 11.931 0 0 1 12 .012c6.623 0 12 5.377 12 12S18.623 24 12 24 0 18.635 0 12.012c0-1.036.132-2.041.379-3h2.079zM12.808 6c.292.821.375 1.346 1.01 1.609.637.264 1.073-.052 1.854-.423l1.142 1.142c-.373.787-.687 1.218-.423 1.854.262.634.784.716 1.609 1.009v1.617c-.816.29-1.347.375-1.61 1.01-.264.636.052 1.071.424 1.853l-1.142 1.142c-.79-.375-1.219-.687-1.85-.424-.639.265-.723.793-1.014 1.611h-1.616c-.292-.821-.375-1.347-1.01-1.61-.637-.264-1.072.052-1.854.423l-1.142-1.142c.366-.771.689-1.212.423-1.854-.263-.635-.793-.719-1.609-1.009v-1.617c.817-.29 1.346-.373 1.609-1.009.264-.637-.051-1.07-.423-1.854l1.142-1.142c.788.374 1.218.687 1.854.423.635-.263.719-.792 1.01-1.609h1.616zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>,
            selected: false
        },
        "Production & Deployment": {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13C3.57 19 2 17.43 2 15.5c0-2.797 2.479-3.833 4.433-3.72C6.266 7.562 8.641 5 12 5zm0-2c-4.006 0-7.267 3.141-7.479 7.092A5.499 5.499 0 0 0 5.5 21h13a5.499 5.499 0 0 0 .979-10.908C19.267 6.141 16.006 3 12 3zm6.5 11h-13a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3zm0 2H15v-1h3.5a.5.5 0 0 1 0 1z"/></svg>,
            selected: false
        },
        "Scaling & Maintenance": {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 5h-3l5-5 5 5h-3v3h-4v-3zm4 14h3l-5 5-5-5h3v-3h4v3zm-9-5v3l-5-5 5-5v3h3v4h-3zm14-4v-3l5 5-5 5v-3h-3v-4h3z"/></svg>,
            selected: false,
        }
    }
    const [projectStages, setProjectStages] = useState(projectStagesImmutable);

    var techTools = { ...tools };
    for (var t in techTools) {
        techTools[t]["selected"] = false;
    }
    const [techUsed, setTechUsed] = useState(techTools);

    return (
        <>
        <Head>
            <title>Andrés Barrera | Clients</title>
            <meta name="description" content="I help companies craft beautiful UI, orchestrate efficient automation, and prototype interconnected systems." />
        </Head>
        <Header></Header>
        <section className={styles.hero}>
            <div className={styles.image}></div>
            <div className={styles.description}>
                <h2>Let's Create Something<br/><span>Revolutionary</span></h2>
                <p>I help innovators across the globe realize their digital dreams. When working on a team, you can rest assured that I will bring the technological know-how to the table.</p>
                <a className={styles.button} href="#login">Start / Continue a Project</a>
            </div>
        </section>
        <section id="login" className={styles.login}>
            <div className={styles.container}>
                <img src="/images/values/automation.webp"/>
                <h3>Log In to Your Client Portal</h3>
                <div id="companyTypes" className={styles.companyTypes}>
                    {
                        Object.entries(companyTypes).map(([company, {svg, selected}], index) => {
                            return (
                                <div onClick={(e) => {
                                    setCompanyTypes(() => ({
                                    ...companyTypesImmutable,
                                    [company]: {svg: svg, selected: true},
                                    }));
                                    document.querySelector('input[name="companytype"]').value = company;
                                }} className={`${styles.companyType} ${selected?styles.companyTypeSelected:''}`} dataset-selected="false" key={company}>
                                    {svg ? svg : <></>}
                                    <p className={`${svg ? null : styles.onlyText }`}>{company}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div id="projectStages" className={styles.companyTypes}>
                    {
                        Object.entries(projectStages).map(([project, {svg, selected}], index) => {
                            return (
                                <div onClick={(e) => {
                                    setProjectStages(() => ({
                                    ...projectStagesImmutable,
                                    [project]: {svg: svg, selected: true},
                                    }));
                                    document.querySelector('input[name="projectstage"]').value = project;
                                }} className={`${styles.companyType} ${selected?styles.companyTypeSelected:''}`} dataset-selected="false" key={project}>
                                    {svg ? svg : <></>}
                                    <p className={`${svg ? null : styles.onlyText }`}>{project}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div id="techUsed" className={styles.techUsed}>
                    {
                        Object.entries(techUsed).map(([techname, {svg, type}], index) => {
                            const gradient = {
                                "--gradient-top": (type === 'backend') ? '#5CA4A9' : 
                                (type === 'frontend') ? '#88C29A' : 
                                (type === 'devops') ? '#F4B400' : 
                                (type === 'design') ? '#FF6B6B' : 
                                (type === 'other') ? '#6E7C7C' : 
                                (type === 'engineering') ? '#FFA07A' : 
                                (type === 'community') ? '#9E579D' : 
                                '#A3A948',
                                "--gradient-bottom": (type === 'backend') ? '#247BA0' : 
                                (type === 'frontend') ? '#4A8F69' : 
                                (type === 'devops') ? '#F57C00' : 
                                (type === 'design') ? '#D83367' : 
                                (type === 'other') ? '#3B3B3B' : 
                                (type === 'engineering') ? '#FF4500' : 
                                (type === 'community') ? '#674172' : 
                                '#B5E655'
                            };
                            if (type !== "community") {
                                return (
                                    <div onClick={(e) => {
                                        e.stopPropagation();
                                        var newState = {...techUsed};
                                        var selected = newState[techname].selected;
                                        console.log(selected);
                                        newState[techname].selected = !selected;
                                        setTechUsed( newState );
                                        console.log(newState[techname].selected);
                                    }} className={`${styles.techItem} ${techUsed[techname].selected ? styles.techItemSelected : null}`} style={gradient} key={techname} data-techname={techname}><p>{techname}</p></div>
                                );
                            }
                        })
                    }
                </div>
                <form>
                    <div className={styles.formset}>
                        <label htmlFor="company" data-newproject="true" hidden>Company</label>
                        <input name="company" onChange={handleChange()} placeholder="Enter your company name..." type="text" hidden></input>
                    </div>
                    <select name="company" onChange={handleChange()}>
                        <option selected name="placeholder">Select your company...</option>
                    </select>
                    <div className={styles.formset}>
                        <label htmlFor="username" data-newproject="true" hidden>Project Username</label>
                        <input name="username" onChange={handleChange()} placeholder="Enter your project username..." type="text"></input>
                    </div>
                    <div className={styles.formset}>
                        <label htmlFor="password" data-newproject="true" hidden>Project Password</label>
                        <input name="password" onChange={handleChange()} placeholder="Enter your project password..." type="password" hidden></input>
                    </div>
                    <div className={styles.formset}>
                        <input name="companytype" onChange={handleChange()} placeholder="Other..." type="text" hidden></input>
                    </div>
                    <div className={styles.formset}>
                        <input name="projectstage" onChange={handleChange()} placeholder="Other..." type="text" hidden></input>
                    </div>
                    <div className={styles.formset}>
                        <input name="techused" onChange={handleTechUsed()} placeholder="Enter a technology..." type="text" hidden></input>
                    </div>
                    <div className={styles.formset}>
                        <label htmlFor="contactname" data-contact="true" hidden>Full Name</label>
                        <input name="contactname" onChange={handleChange()} placeholder="This project's primary contact..." type="text" hidden></input>
                    </div>
                    <div className={styles.formset}>
                        <label htmlFor="contacttitle" data-contact="true" hidden>Title</label>
                        <input name="contacttitle" onChange={handleChange()} placeholder="Primary contact title..." type="text" hidden></input>
                    </div>
                    <div className={styles.formset}>
                        <label htmlFor="contactphone" data-contact="true" hidden>Phone Number</label>
                        <input name="contactphone" onChange={handleChange()} placeholder="Primary contact phone number..." type="text" hidden></input>
                    </div>
                    <div className={styles.formset}>
                        <label htmlFor="contactemail" data-contact="true" hidden>E-Mail</label>
                        <input name="contactemail" onChange={handleChange()} type="email" placeholder="Primary contact e-mail address..." hidden></input>
                    </div>
                    <div style={{"width": "100%", "overflow-x": "none"}} className={styles.formset}>
                        <label htmlFor="projectsummary" data-companygoals="true" hidden>Project Summary</label>
                        <textarea name="projectsummary" onChange={handleChange()} placeholder="Describe your project..." type="text" hidden></textarea>
                    </div>
                    <div className={styles.formset}>
                        <label htmlFor="enduser" data-companygoals="true" hidden>End User</label>
                        <textarea name="enduser" onChange={handleChange()} placeholder="Describe your end user..." type="text" hidden></textarea>
                    </div>
                    <div className={styles.formset}>
                        <label htmlFor="projecttimelineq" data-companygoals="true" hidden>Project Timline</label>
                        <div className={styles.QQ}>
                            <input name="timelinequan" onChange={handleChange()} type="number" hidden></input>
                            <select name="timelinequal" onChange={handleChange()} hidden>
                                <option>Days</option>
                                <option>Weeks</option>
                                <option selected>Months</option>
                            </select>
                        </div>
                        <textarea name="timelinesummary" onChange={handleChange()} placeholder="Elaborate on your timeline goals..." type="text" hidden></textarea>
                    </div>
                    <div className={styles.formset}>
                        <label htmlFor="technology" data-companygoals="true" hidden>Project Success</label>
                        <textarea name="technology" onChange={handleChange()} placeholder="What are your project's success metrics?" type="text" hidden></textarea>
                    </div>
                    <div className={styles.buttons}><button id="backbutton" className={styles.button} type="button" onClick={continueButton[backOnclick]} hidden>Back</button><button id="continueButton" className={styles.button} type="button" onClick={continueButton[continueOnclick]}>Continue</button></div>
                </form>
                <div id="newproject" className={styles.newproject}>
                    <div className={styles.divider}>
                        <div></div>
                        <i>OR</i>
                        <div></div>
                    </div>
                    <button onClick={continueButton["newProject"]} className={styles.newbutton} type="button">Start a New Project</button>
                </div>
            </div>
        </section>
        </>
    );
}