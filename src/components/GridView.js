import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image from '../images/Pastor.png';
import image6 from '../images/6.jpg';

import image2 from '../images/2.jpg';
import csumb from '../images/csumb.jpeg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';

import '../styles/app.css';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowY: 'hidden',
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 950,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  

}));



  const tileData = [
    {
      img: image6,
      title: 'Vision Trip',
      author: 'Admin',
      featured: false,
    },
    {
      img: image2,
      title: 'Church',
      author: 'author',
      featured: false,
    },
    {
      img: csumb,
      title: 'CSU Monterey Bay',
      author: 'author',
      featured: true,
    },
    {
      img: image4,
      title: 'Monterey Bay',
      author: 'author',
      featured: false,
    },
    {
      img: image5,
      title: 'Information Share',
      author: 'author',
      featured: false,
    },    
  ];
 
export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            
            
            <Typography component="h5" variant="h5">
            <img src={image} id="pastor" style={{width: "60%" }} />
            
            <br/>
            임우영 담임목사
            </Typography>
            <hr />
            <Typography component="h5" variant="h5">
              목사님 약력
            </Typography>
            <Typography >
              <br/>
              총신대학교 신학<br />
              대학원(M.Div) <br />
              풀러신학 대학원(D.Min) 과정<br /><br />
              
              서울창성교회 전도사  <br />
              부산대청교회 부목사<br />
              남가주 청운교회 부목사  <br />
              몬트레이 소망장로교회 담임목사<br />
              
            </Typography>
            <hr/>
            <Typography variant="h5" component="h5"> 
            전하는 말씀
            </Typography>
            <Typography align="left" id ="wordsByPastor" component="h6">
            <br/>&nbsp;&nbsp; 아름다운 몬트레이에서 하나님께 예배드리는 자가 가장 아름다운 사람들입니다. 
            우리 함께 사랑하는 주님께 예배합시다. 예배로 여러분을 초대합니다.<br/> 
            &nbsp;&nbsp; 주님의 말씀이 선포되고 그 말씀에 순종하는 주님의 백성이 있는 곳이 교회입니다. <br />
            소망교회에 함께 교회가 되실 성도를 환영합니다. <br />
             저희교회는 CSUMB 유학생에게 복음을 전합니다. 
            벌써 4년째를 맞이한 유학생들의 방문은 교회의 사명이 되었습니다. <br />
            &nbsp;&nbsp; 올해도 주님이 만나게 하실 생명을 기다립니다. 
            마리나에서 함께 하나님의 나라를 세워갈 성도님을 축복하고 환영합니다.
            ​올 2019년도에는 교회에 가는 사람이 아닌 교회가 되는 주님의 백성을 만나길 소망합니다. <br /><br />
      
            </Typography>
            <Typography align="right" component="h6"> 
            2019 마리나에게 임우영 목사 &nbsp;&nbsp;
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
            <GridList cellHeight={220} spacing={20} className={classes.gridList}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    titlePosition="top"
                    actionIcon={
                      <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                        <StarBorderIcon />
                      </IconButton>
                    }
                    actionPosition="left"
                    className={classes.titleBar}
                  />
                </GridListTile>
              ))}
            </GridList>
         
        </Grid>
      </Grid>
      
    </div>
  );
}

