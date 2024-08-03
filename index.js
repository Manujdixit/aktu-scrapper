const axios = require("axios");
const qs = require("qs");

async function solve(rollno, dob) {
  let data = qs.stringify({
    __EVENTTARGET: "",
    __EVENTARGUMENT: "",
    __VIEWSTATE:
      "/wEPDwULLTExMDg0MzM4NTIPZBYCAgMPZBYEAgMPZBYEAgkPDxYCHgdWaXNpYmxlaGRkAgsPDxYCHwBnZBYCAgEPDxYCHwBnZBYCAgMPDxYCHgdFbmFibGVkZ2RkAgkPZBYCAgEPZBYCZg9kFgICAQ88KwARAgEQFgAWABYADBQrAABkGAEFEmdyZFZpZXdDb25mbGljdGlvbg9nZI39oJgydt1DpqkTbfYVCIehpm4TLMtdl7PeRLzN+5Jy",
    __VIEWSTATEGENERATOR: "FF2D60E4",
    __EVENTVALIDATION:
      "/wEdAAbVARScphHwmjwD865sI1EeWB/t8XsfPbhKtaDxBSD9Lx25Lt8Vu4DZSHACA6NZjXuO1N1XNFmfsMXJasjxX85jSqX/wPN6qcfKF0mMYn5Pzrqic3S0ZDjCzqE9M2ZhdeRT68jJfo8Qy8cvEUD7m7ars0BV+cLKRjL8DPXKB3128Q==",
    txtRollNo: rollno,
    txtDOB: dob,
    "g-recaptcha-response":
      "03AFcWeA7-PWMILI2jw1Z_3yUU3QmfjeDXk1aGnoOWatfyMJrfnDbXRDgO7-sLOY6mUoBo8zqwXPLWw_rOv5xTgTN8pXbPP6vYWkoNy9sdQfI053a2foswYr2zY3yBbcSl8XP9k-MRbfv7dsUk21jGF_fUAx157kGFJBlKY3DTK7GbKjMfLVcLZuGkXu_m1kWRk9lgZrpWlQCONdSxAftSr5hC2mJh-fjTS8vt1-dqfyR7X1-7XXlwZ-KrF6Kluupi13JjyUDUNX3QtYlmGAy5V5-rkgN0QHHc1NydN6z90jlzF3fbFNNMDfr0o7MTOR5VNwmndf7KQsMow18lcEnxlS4IhPssdzuvWoE_QrE5DvLtNb9VZwr8VFlIVVE10qQgOO2pXb-0pFq7r7J9z7UdWLzh5gaLLkxzfmxno7u5DK4iq-KkDpmAaIWEh5DR7G3OI9_YavTMwKoPolsIdz1O6wN5MPVb3lwL9lVJ6lcaQ-fZUcc7GUyj9sTMvSlmdsuctUiasjS146vQ_0W8X-RI4h8Fb-t3aTZJ2-dGuHt1204AGUsrZs_qJvqieuf2If99598l_lGaEKt08Ytcsx2a_z1smJmzIP6BtI93Mg0xerF8F5LhfEUPwcD8kL9PiBQ3kn5lCeEGUn0AT0bZCY4gODjqoQsVzpYNBsdD5un-Fk73UKYfCO7BFIUyYrKVQjNs6akaIO6rkXxC08oFMA6j6ZbfFt7OgAMTIAikan86WpDdo_YuE_wUAhCfyEktpfYxujMuZNSLhiSYF1SHjn-8XyMNMhRmOShP9h8AD_fgrwjGVblAXtK6eSO1qNHZqWUGNHBEUzKLTmuFH4NZWppHhzLApoxHK5qZqHb4HDg3WxtbjyCPPHUmgBDRHDbm6VhZJekzR0UDBJJk2Wk7Vtfa8jb0CK0JFNijmKZIcHbOxfBZWaBw7bWqQJmEiqM1rUmSWEF-O4Y-H_Rus9vr7iFi5j_JSi9XmuBBQFQ6aBGFYaSELmy2ABjAMrvE0cbbF3-Ul4AhIPk3tG-uXN_c96JfZcoPs59V_GPYZvRFmHAlI4U7SGF0_z-4pcVTWoZaFjJ4l4K90Xj1S6PMHfz8GtvbabHnw8UfjIKr9PpeSpdRydZ-T2N6SidQM31m0_0lUqAzPEoGmSW2hZALEsm0E459ilkt4VVVHxeruxPPgDtHw-AkH9Q7kZzYSF6HGyJQTiLYlcm8z21QTf16Vk2bYlBqTEgN0TqKm2tpleSqC4c-JmnM-eNRX5o64MhdsIzHVB0zalESYvusvtwvVs-VPnzH_zxuF9rFt3u8Wj3T7W_ShJJc-UULBZCRKO8ibD3kWlQqj1JcJCbnJvrCVL_YwCnAL-pRLxB7tySKfTyefmUsrWVLfB5uXJKhu5hP8BN24-IG7aM6Ts484FsSiCv1K8oKP7v21hmdHKyQXE9Z9Wen5Z7ep4SV7LR-OYKyy_D3WV3kPYep_LwHnHr-8v7G2tBZEWb4eCoTyTL4t-n502aIilfBnajWJrWDiWEgaQ0OainOfhkCCXcmwLlnv1ZNLDX42hybK5uKjObMHGWDs8zglRZIzPcGe3srmXebHhMFPpumpJxd6l81xxyocBEPMAooD0_EgyZtCK1QbGaYzwWJdbtvx78duScvnS0QSBNI9zg9dFgDzqV09wlbpo8Ays7K0PQw0paOBmXn9i-p3r1-JgiMu2Anky4uq8YqoJnZhSpQs0ehRP8soir6E80CdRabD73v25xfQSjvxZmoFXDHw1-FjV6k313Wrx__2zhcQ2YzvAXN38v9Sb1wL4N37UPZ_hIouqgFQK9AftQEjm61RN-Dqunq5UWNSl9-kS_OzBnTE_A8MXVU9KL5Kxzx-d1wliGEPorDDdFVD7rYGkKluXS0HWDa4YJxhS7Kw8_l24gCrAF7R8Wruol1lsdUBPT4l86th_Qua-cbdCvAs2CqO_XKUN0CpbuF-dMuBFR1uMi5Vuw9pM-RMLlRbt-j3xyPY_rbr3Q_EhH8RQBBlnXBRsVlYOzXM54N47DAMJcLg9UuiEeTaCVy8dqbdRQbe2QsIK2KLOzVBTXEFkqSlNbzAE27xeVWNHXUf6Uzy2zwYorr9u3Zup_s8aSn-aBf0zfnJr-IpT7UbBYCxpagxtcj0bZDTZU30MWEKNc",
    btnSearch: "खोजें",
    hidForModel: "",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://oneview.aktu.ac.in/WebPages/aktu/OneView.aspx",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: "https://oneview.aktu.ac.in",
      Connection: "keep-alive",
      Referer: "https://oneview.aktu.ac.in/WebPages/aktu/OneView.aspx",
      Cookie: "ASP.NET_SessionId=5zwkamz2bnv4vf2m3egdrrua",
      "Upgrade-Insecure-Requests": "1",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-User": "?1",
      Priority: "u=0, i",
    },
    data: data,
  };

  const response = await axios.request(config);
  console.log(response.data);
}

solve("2100681520056", "2004/06/13");
