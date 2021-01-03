import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar  from '@material-ui/core/Toolbar'

export default function Navbar(){
    return(
        <div>
            <AppBar color="primary">
                <Toolbar>
                    <h1>Eletronica Raiz</h1>
                </Toolbar>
            </AppBar>
        </div>
    );
}