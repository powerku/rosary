import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';


function Rosary() {
    const [rosary, setRosary] = React.useState('joy');
    const [checked, setChecked] = React.useState(false);

    const checkBoxRef = React.useRef();

    const handleChange = (event) => {
        setRosary(event.target.value);
    };

    const btnClick = (event) => {
        setChecked(true);
        console.log('click', event);
    }

    return (
        <div className="main">
            <header>
                <Select
                    labelId="rosary-label"
                    id="nm_rosary"
                    value={rosary}
                    onChange={handleChange}
                >
                    <MenuItem value={'joy'}>환희의 신비</MenuItem>
                    <MenuItem value={'light'}>빛의 신비</MenuItem>
                    <MenuItem value={'pain'}>고통의 신비</MenuItem>
                    <MenuItem value={'glory'}>영광의 신비</MenuItem>
                </Select>
            </header>
            <ul className="prayers">
                <li className="dan">
                    <p>1단 마리아께서 예수님을 잉태하심을 묵상합시다.</p>
                    <Checkbox ref={checkBoxRef} checked={checked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox ref={checkBoxRef} checked={checked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </li>
                <li className="dan">
                    <p>2단 마리아께서 엘리사벳을 찾아보심을 묵상합시다</p>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </li>
                <li className="dan">
                    <p>3단 마리아께서 예수님을 낳으심을 묵상합시다.</p>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </li>
                <li className="dan">
                    <p>4단 마리아께서 예수님을 성전에 바치심을 묵상합시다.</p>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </li>
                <li className="dan">
                    <p>5단 마리아께서 잃으셨던 예수님을 성전에서 찾으심을 묵상합시다.</p>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </li>
            </ul>
            <Button variant="contained" onClick={btnClick}>성모송 1회 완료</Button>
        </div>
    )
}

export default Rosary;