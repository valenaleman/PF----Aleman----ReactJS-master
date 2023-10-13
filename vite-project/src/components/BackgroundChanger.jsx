import { useEffect } from 'react'

const BackgroundChanger = () => {

    userEffect(() => {
        const changeBackground = () => {
            let newColor = "";

            if (window.innerWidth < 600) newColor = "lightBlue";
            else if (window.innerWidth < 800) newColor = "lightGreen";
            else newColor = "lightGray"; 

            console.log('resize', window.innerWidth, newColor)

            document.body.style.backgroundColor = newColor;
        };

        window.addEventListener("resize", changeBackground);

        return () => {
            window.removeEventListener("resize", changeBackground);
        }
    }, []);


    return <div>BackgroundChanger</div>

};

export default BackgroundChanger