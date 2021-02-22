import React from 'react';
import * as R from 'react-native';
import Constants from 'expo-constants';
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import Perfil from '../../images/p1.jpg';
import Perfil2 from '../../images/p2.jpg';
import Perfil3 from '../../images/p3.jpg';
import Background from '../../images/3.jpg';
import Background2 from '../../images/6.jpg';
import Background3 from '../../images/5.jpg';

const HomeScreen = () => {
  return(
    <R.ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#004145',
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        // paddingLeft: 20,
        // paddingRight: 20
      }}
    >
      <R.View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
      }}> 
        <R.TouchableOpacity>
          <AntDesign name="bars" size={24} color="white" />
        </R.TouchableOpacity>
        <R.TouchableOpacity>
          <SimpleLineIcons name="options-vertical" size={24} color="white" />
        </R.TouchableOpacity>
      </R.View>
      <R.Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 40,
          marginTop: 10,
          paddingRight: 20,
          paddingLeft: 20
        }}
      >
        Find Awesome Photos
      </R.Text>
      <R.View style={{
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#a5b4b5',
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 24,
        marginRight: 20,
        marginLeft: 20,
        paddingLeft: 24, 
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <R.TextInput
          placeholder="Search inspiration..."
          placeholderTextColor="#a5b4b5"
          style={{
            color: '#fff'
          }}
        />
        <AntDesign name="search1" size={24} color="#a5b4b5" />
      </R.View>
      <R.View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          padding: 30,
          marginTop: 40,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          flex: 1,
          height: '100%'
        }}
      >
        <R.View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <R.Text style={{
            color: '#999',
            fontWeight: 'bold',
            fontSize: 14,
            marginRight: 20
          }}>
            MOST POPULAR
          </R.Text>
          <R.Text style={{
            color: '#004145',
            fontWeight: 'bold',
            fontSize: 14,
            marginRight: 15,
            borderBottomWidth: 4,
            paddingBottom: 3,
            borderBottomColor: '#004145',
            textAlign: 'center'
          }}>
            RECENT
          </R.Text>
        </R.View>

        {/* FIRST POST */}
        <R.View style={{
          marginTop: 40,
          width: '100%',
        }}>
          <R.View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <R.View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}>
              <R.Image source={Perfil} style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 10
              }} />
              <R.View> 
                <R.Text style={{
                  color: '#00737a',
                  fontWeight: 'bold',
                  fontSize: 15
                }}>
                  José Guilherme
                </R.Text>
                <R.Text style={{
                  color: '#999',
                  fontSize: 14
                }}>
                  2 minutes ago
                </R.Text>
              </R.View>
            </R.View>
            <R.TouchableOpacity>
              <Ionicons name="md-options-sharp" size={30} color="#666" />
            </R.TouchableOpacity>
          </R.View>
          <R.View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <R.ImageBackground style={{
              width: '100%',
              height: 250,
              marginTop: 20,
              borderRadius: 30,
              overflow: 'hidden'
            }} source={Background}>

            </R.ImageBackground>
            <R.View style={{
              width: 12,
              height: 170,
              backgroundColor: '#004145',
              borderTopLeftRadius:  50,
              marginLeft: 18,
              borderBottomLeftRadius:  50
            }}></R.View>
          </R.View>
        </R.View>

        {/* SECOND POST */}
        <R.View style={{
          marginTop: 50,
          width: '100%',
        }}>
          <R.View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <R.View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}>
              <R.Image source={Perfil2} style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 10
              }} />
              <R.View> 
                <R.Text style={{
                  color: '#00737a',
                  fontWeight: 'bold',
                  fontSize: 15
                }}>
                  Giovanna Mendes
                </R.Text>
                <R.Text style={{
                  color: '#999',
                  fontSize: 14
                }}>
                  6 minutes ago
                </R.Text>
              </R.View>
            </R.View>
            <R.TouchableOpacity>
              <Ionicons name="md-options-sharp" size={30} color="#666" />
            </R.TouchableOpacity>
          </R.View>
          <R.View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <R.View style={{
              width: 12,
              height: 170,
              backgroundColor: '#004145',
              borderTopRightRadius:  50,
              marginLeft: -30,
              borderBottomRightRadius:  50
            }}></R.View>
            <R.ImageBackground style={{
              width: '100%',
              height: 250,
              marginTop: 20,
              borderRadius: 30,
              marginLeft: 18,
              overflow: 'hidden'
            }} source={Background2}>

            </R.ImageBackground>
          </R.View>
        </R.View>

        {/* THIRD POST */}
        <R.View style={{
          marginTop: 40,
          width: '100%',
          marginBottom: 40
        }}>
          <R.View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <R.View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}>
              <R.Image source={Perfil3} style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 10
              }} />
              <R.View> 
                <R.Text style={{
                  color: '#00737a',
                  fontWeight: 'bold',
                  fontSize: 15
                }}>
                  Gustavo Rodrigues
                </R.Text>
                <R.Text style={{
                  color: '#999',
                  fontSize: 14
                }}>
                  10 minutes ago
                </R.Text>
              </R.View>
            </R.View>
            <R.TouchableOpacity>
              <Ionicons name="md-options-sharp" size={30} color="#666" />
            </R.TouchableOpacity>
          </R.View>
          <R.View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <R.ImageBackground style={{
              width: '100%',
              height: 250,
              marginTop: 20,
              borderRadius: 30,
              overflow: 'hidden'
            }} source={Background3}>

            </R.ImageBackground>
            <R.View style={{
              width: 12,
              height: 170,
              backgroundColor: '#004145',
              borderTopLeftRadius:  50,
              marginLeft: 18,
              borderBottomLeftRadius:  50
            }}></R.View>
          </R.View>
        </R.View>
        
      </R.View>
    </R.ScrollView>
  );
}

export default HomeScreen;