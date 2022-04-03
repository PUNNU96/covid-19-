import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'

import DistrictItem from '../DistrictItem'
import StateWiseTotalRecord from '../StateWiseTotalRecord'
import TimeLineData from '../TimeLineData'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const statesImagesList = [
  {
    stateCode: 'AN',
    stateName: 'Andaman and Nicobar Islands',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985810/Group_7362_lir31e.png',
  },
  {
    stateCode: 'AP',
    stateName: 'Andhra Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446883/Missing%20Covid19%20project%20images/Group_7354Andhar_Pradesh_muagmf.png',
  },
  {
    stateCode: 'AR',
    stateName: 'Arunachal Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984445/Group_7340_dtm30h.png',
  },
  {
    stateCode: 'AS',
    stateName: 'Assam',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984645/Group_7341_usby90.png',
  },
  {
    stateCode: 'BR',
    stateName: 'Bihar',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984215/Group_7335_pyb7qe.png',
  },
  {
    stateCode: 'CH',
    stateName: 'Chandigarh',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985805/Group_7361_dtlip4.png',
  },
  {
    stateCode: 'CT',
    stateName: 'Chhattisgarh',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985205/Group_7353_nawgny.png',
  },
  {
    stateCode: 'DN',
    stateName: 'Dadra and Nagar Haveli and Daman and Diu',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985814/Group_7357_g8re5l.png',
  },
  {
    stateCode: 'DL',
    stateName: 'Delhi',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648986008/Group_7358_xsmr0h.png',
  },
  {
    stateCode: 'GA',
    stateName: 'Goa',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984640/Group_7349_iy0fwc.png',
  },

  {
    stateCode: 'GJ',
    stateName: 'Gujarat',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984320/Group_7337_y12ig7.png',
  },
  {
    stateCode: 'HR',
    stateName: 'Haryana',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648983939/Group_7332_cwbygj.png',
  },
  {
    stateCode: 'HP',
    stateName: 'Himachal Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648983860/Group_7364_ooxf4q.png',
  },
  {
    stateCode: 'JK',
    stateName: 'Jammu and Kashmir',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648983425/Group_7328_wsmo9p.png',
  },
  {
    stateCode: 'JH',
    stateName: 'Jharkhand',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984326/Group_7342_1_nivwb4.png',
  },
  {
    stateCode: 'KA',
    stateName: 'Karnataka',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985586/Group_7339_lvvtla.png',
  },
  {
    stateCode: 'KL',
    stateName: 'Kerala',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985579/Group_7355_flk97p.png',
  },
  {
    stateCode: 'LA',
    stateName: 'Ladakh',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643446552/Missing%20Covid19%20project%20images/Group_7363Ladakh_k52rn8.png',
  },
  {
    stateCode: 'LD',
    statename: 'Lakshadweep',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648986000/Group_7359_ut8rgo.png',
  },
  {
    stateCode: 'MH',
    statName: 'Maharashtra',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985468/Group_7350_syio4b.png',
  },
  {
    stateCode: 'MP',
    stateName: 'Madhya Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984198/Group_7336_momffo.png',
  },
  {
    stateCode: 'MN',
    stateName: 'Manipur',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984930/Group_7346_irdgfr.png',
  },
  {
    stateCode: 'ML',
    stateName: 'Meghalaya',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984648/Group_7344_eyfx6l.png',
  },
  {
    stateCode: 'MZ',
    stateName: 'Mizoram',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985123/Group_7347_uxpbbr.png',
  },
  {
    stateCode: 'NL',
    stateName: 'Nagaland',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984924/Group_7345_jukhvg.png',
  },
  {
    stateCode: 'OR',
    stateName: 'Odisha',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985342/Group_7348_1_xqed2u.png',
  },
  {
    stateCode: 'PY',
    stateName: 'Puducherry',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648986004/Group_7360_ktsilr.png',
  },
  {
    stateCode: 'PB',
    stateName: 'Punjab',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648983739/Group_7330_csdmbq.png',
  },
  {
    stateCode: 'RJ',
    stateName: 'Rajasthan',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984062/Group_7333_lopfcy.png',
  },
  {
    stateCode: 'SK',
    stateName: 'Sikkim',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984439/Group_7338_wbzf3y.png',
  },
  {
    stateCode: 'TN',
    stateName: 'Tamil Nadu',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985572/Group_7356_thrt0y.png',
  },
  {
    stateCode: 'TG',
    stateName: 'Telangana',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985463/Group_7351_klhb5e.png',
  },
  {
    stateCode: 'TR',
    stateName: 'Tripura',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648985200/Group_7352_ujdq49.png',
  },
  {
    stateCode: 'UP',
    stateName: 'Uttar Pradesh',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984139/Group_7334_broqdp.png',
  },
  {
    stateCode: 'UT',
    stateName: 'Uttarakhand',
    ImageUrl:
      'https://res.cloudinary.com/ddzm2v7i3/image/upload/v1643432404/covid19%20project%20states%20images/Group_7342Jharkhand_rhuujy.png',
  },
  {
    stateCode: 'WB',
    stateName: 'West Bengal',
    ImageUrl:
      'https://res.cloudinary.com/dkt4hbybq/image/upload/v1648984434/Group_7343_mfaiqu.png',
  },
]

class StateSpecificDetails extends Component {
  state = {
    isLoading: true,
    activeTab: true,
    category: 'Confirmed',
    dataArray: [],
    eachStateTotalData: [],
    nameOfState: '',
    stateId: '',
    stateCode: '',
    totalTestedData: 0,
    date: '',
  }

  componentDidMount() {
    this.getAllStatesData()
  }

  getAllStatesData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const apiUrl = `https://apis.ccbp.in/covid19-state-wise-data/`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const stateTastedData = data[stateCode].total.tested
      const stateObject = statesList.filter(
        each => each.state_code === stateCode,
      )
      const eachState = data[stateCode].total
      const stateName = stateObject[0].state_name
      const dateData = new Date(data[stateCode].meta.last_updated)
      this.setState({
        isLoading: false,
        eachStateTotalData: eachState,
        totalTestedData: stateTastedData,
        nameOfState: stateName,
        stateId: stateCode,
        dataArray: data,
        date: dateData,
        stateCode,
      })
    } else {
      console.log('Fetch Error')
    }
  }

  onGetCategory = categoryVal => {
    this.setState({category: categoryVal, activeTab: false})
  }

  renderLoader = () => (
    <>
      <div className="loader-container" testid="stateDetailsLoader">
        <Loader type="ThreeDots" color="blue" height="50" width="50" />
      </div>
    </>
  )

  getCategoryWiseData = () => {
    const {category, stateId, dataArray} = this.state
    const districtOutput = dataArray[stateId].districts
    const distNamesList = Object.keys(districtOutput)
    const categoryLower = category.toLowerCase()

    const categoryData = distNamesList.map(element => ({
      distName: element,
      value: districtOutput[element].total[categoryLower]
        ? districtOutput[element].total[categoryLower]
        : 0,
    }))

    categoryData.sort((a, b) => b.value - a.value)

    const activeCases = distNamesList.map(element => ({
      distName: element,
      value:
        districtOutput[element].total.confirmed -
        (districtOutput[element].total.recovered +
          districtOutput[element].total.deceased)
          ? districtOutput[element].total.confirmed -
            (districtOutput[element].total.recovered +
              districtOutput[element].total.deceased)
          : 0,
    }))
    activeCases.sort((a, b) => b.value - a.value)

    if (categoryLower === 'active') {
      return activeCases
    }
    return categoryData
  }

  ShowImage = () => {
    const {stateCode} = this.state

    const singleImage = statesImagesList.find(
      image => image.stateCode === stateCode,
    )
    console.log(singleImage)
    const {ImageUrl, stateName} = singleImage
    console.log(ImageUrl)
    console.log(stateName)
    return <img src={ImageUrl} alt={stateName} className="state-image" />
  }

  renderStateView = () => {
    const {
      activeTab,
      totalTestedData,
      eachStateTotalData,
      nameOfState,
      date,
      category,
      stateCode,
    } = this.state

    const catdata = this.getCategoryWiseData()

    return (
      <>
        <div className="state-name-row">
          <h1 className="state-title">{nameOfState}</h1>
          <div className="testNo-container">
            <p className="test-title">Tested</p>
            <p className="testNo">{totalTestedData}</p>
          </div>
        </div>

        <div>
          <p className="last-date">{`last update on ${date}`}</p>
        </div>

        <div className="align-center-row">
          <div className="country-stats">
            <StateWiseTotalRecord
              onGetCategory={this.onGetCategory}
              eachStateTotalData={eachStateTotalData}
              active={activeTab}
            />
          </div>
        </div>

        <div className="image-state">{this.ShowImage()}</div>

        <div className="total-district-data-block">
          <h1 className={`district-heading ${category}-color`}>
            Top Districts
          </h1>
          <div className="ul-parent-list">
            <div className="district-data-ul-list">
              <ul
                className="districts-container"
                testid="topDistrictsUnorderedList"
              >
                {catdata.map(each => (
                  <DistrictItem
                    key={each.distName}
                    number={each.value}
                    name={each.distName}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="graphs-data" testid="lineChartsContainer">
            <TimeLineData stateCode={stateCode} category={category} />
          </div>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="single-state-main-container">
          <div className="state-content-container">
            {isLoading ? this.renderLoader() : this.renderStateView()}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default StateSpecificDetails
