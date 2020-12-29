import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup'
import Paper from '@material-ui/core/Paper'
import { blogPosts } from './posts'
import styles from './Grid.module.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();


    return (
        <div className={styles.container}>
            <Grid container className={classes.root} spacing={4}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing} className={styles.posts}>
                        {blogPosts.map((post) => (
                            <Grid key={post.id} item>
                                <div className={styles.card}>
                                    <div className={styles.heading}>
                                        {post.title}
                                    </div>
                                    <div className={styles.img}>
                                        {post.img}
                                    </div>
                                    <div className={styles.summary}>
                                        {post.summary}
                                    </div>

                                    <div className={styles.footer}>
                                        <div>
                                            Written by - {post.author}
                                            Date - {post.dateAuthored}
                                        </div>
                                        <div className={styles.read}>
                                            <a href={post.url}>Read</a>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
