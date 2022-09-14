import { Typography } from '@mui/material'
import { Stack, Box } from '@mui/system'
import Jonathan from "../Images/jonathan.png"
import Maria from "../Images/maria.png"
import React from 'react'

export const Index = () => {
  return (
    <React.Fragment>
        <Stack alignItems="center" alignContent="center" spacing={6} sx={{
            pt: 15,
            pb: 15
        }}>
            <Stack width="29rem" spacing={3}>
                <Typography align="center" sx={{
                    
                    fontWeight: "Bold",
                    fontSize: "3.375rem",
                    lineHeight: "1.17",
                    letterSpacing: "-1.69px",
                    color: "#19191b"
                }}>What users say</Typography>
                <Typography align="center" sx={{
                    
                    fontWeight: "normal",
                    fontSize: "1.181rem",
                    lineHeight: "1.86",
                    letterSpacing: "-0.59px",
                    color: "#696871"
                }}>Create custom landing pages with Omega that converts more visitors than any website.</Typography>
            </Stack>
            <Stack direction={{sm:"row", xs: "column"}} spacing={4}>
                <Box width="25.75rem" height="14.188rem" sx={{
                    border: "solid 0.9px #eae9f2",
                    borderRadius: "9px",
                    background: "rgba(255, 255, 255, 0.7)",
                    alignItems: "center",
                    alignContent: "center",
                }} >
                    <Stack width="22.688rem" spacing={2} sx={{
                        p: 3
                    }}>
                        <Typography sx={{
                            
                            fontSize: "1.181rem",
                            fontWeight: "normal",
                            lineHeight: "1.86",
                            letterSpacing:"-0.19px",
                            color: "#19191b"
                        }}>OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</Typography>
                        <Stack direction="row" spacing={2} justifyContent= "flex-start">
                            <Box width="2.313" height="2.313"><img src={Jonathan}/></Box>
                            <Stack>
                                <Typography sx={{
                                    fontFamily:"CircularStd",
                                    fontSize: "1.181rem",
                                    fontWeight: "bold",
                                    lineHeight:"1.33",
                                    letterSpacing:"-0.59px"
                                }}>Jonathan Taylor</Typography>
                                <Typography sx={{
                                    fontSize: "0.9rem",
                                    color: "#696871"
                                }}>CEO at Creativex</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
                <Box width="25.75rem" height="14.188rem" sx={{
                    border: "solid 0.9px #eae9f2",
                    borderRadius: "9px",
                    background: "rgba(255, 255, 255, 0.7)",
                    alignItems: "center",
                    alignContent: "center",
                }} >
                    <Stack width="22.688rem" spacing={2} sx={{
                        p: 3
                    }}>
                        <Typography sx={{
                            
                            fontSize: "1.181rem",
                            fontWeight: "normal",
                            lineHeight: "1.86",
                            letterSpacing:"-0.19px",
                            color: "#19191b"
                        }}>OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</Typography>
                        <Stack direction="row" spacing={2} justifyContent= "flex-start">
                            <Box width="2.313" height="2.313"><img src={Maria}/></Box>
                            <Stack>
                                <Typography sx={{
                                    fontFamily:"CircularStd",
                                    fontSize: "1.181rem",
                                    fontWeight: "bold",
                                    lineHeight:"1.33",
                                    letterSpacing:"-0.59px"
                                }}>Maria Stanly</Typography>
                                <Typography sx={{
                                    fontSize: "0.9rem",
                                    color: "#696871"
                                }}>Digital Marketer, writer</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    </React.Fragment>
  )
}
export default Index