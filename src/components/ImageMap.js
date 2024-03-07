import React, { useState } from 'react';

function ImageMap() {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleHover = (image) => {
        setHoveredImage(image);
    };

    const handleHoverOut = () => {
        setHoveredImage(null);
    };

    return (
        <div className="image-container" onMouseOut={handleHoverOut}>
            <img
                src={hoveredImage || "./buttons/no_selection.png"}
                useMap="#image-map"
                alt="Main Image"
                className="main-image"
                width="100%"
                height="auto"
            />
            <map name="image-map">
                <area
                    onMouseOver={() => handleHover("./buttons/projects.png")}
                    onMouseOut={handleHoverOut}
                    href=".Projects"
                    coords="545,543,526,477,524,396,549,318,814,442,663,693,616,647,570,597"
                    shape="poly"
                />
                <area
                    onMouseOver={() => handleHover("./buttons/about.png")}
                    onMouseOut={handleHoverOut}
                    href="./About"
                    coords="582,264,549,319,810,441,965,368,953,236,946,156,938,71,847,85,718,138,632,202,661,228"
                    shape="poly"
                />
                <area
                    onMouseOver={() => handleHover("./buttons/contact.png")}
                    onMouseOut={handleHoverOut}
                    href="./Contact"
                    coords="1109,451,1418,299,1446,375,1451,452,1420,566,1352,649,1296,698,1197,755"
                    shape="poly"
                />
                <area
                    onMouseOver={() => handleHover("./buttons/cv.png")}
                    onMouseOut={handleHoverOut}
                    href="./CV"
                    coords="963,361,936,65,1006,67,1044,76,1111,87,1164,99,1221,120,1272,152,1345,200,1387,253,1415,299,1113,447"
                    shape="poly"
                />
            </map>
        </div>
    );
}

export default ImageMap;
