from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
import random
import subprocess
import time
import os
from selenium import webdriver
from selenium.common.exceptions import NoSuchWindowException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.alert import Alert
import random
import time
import datetime

def chromeStart():
    try:
        # 크롬드라이버 옵션 설정
        #options = webdriver.ChromeOptions()
        options = Options()
        #options.add_argument("--disable-blink-features=AutomationControlled")
        userCookieDir = os.path.abspath(f"./cookie")
        if os.path.exists(userCookieDir) == False:
            os.mkdir(userCookieDir)
            
        chrome_cmd = '\"C:\Program Files\Google\Chrome\Application\chrome.exe\" --user-data-dir="'+str(userCookieDir)+'" --disable-gpu --disable-popup-blocking --disable-dev-shm-usage --disable-plugins --disable-extensions --disable-background-networking'
        driver = webdriver.Chrome(options=options)
        return driver
    except Exception as e:
        print(e)
        input("아무키나 누르세요... ")

driver = chromeStart()

current_window = driver.current_window_handle
# 새로운 창 핸들 찾기
new_window = None
while not new_window:
    for window_handle in driver.window_handles:
        if window_handle != current_window:
            new_window = window_handle
            driver.switch_to.window(window_handle)
            time.sleep(1)
            current_url = driver.current_url
            print("새창 찾기 창 주소: " + driver.current_url)
            if "https://pay.musinsa.com/certify/req"  in current_url:
                print("찾는 주소가 열린 창입니다.")
                break
driver.switch_to.window(new_window)
iFrame = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH,'//*[@id="__tosspayments_connectpay_iframe__"]')))
driver.switch_to.frame(iFrame)

while 1:
  try:
    driver.execute_script("document.evaluate('//*[@id='connectpay-portal-container']/div/div/a[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();")
    break
  except:
    time.sleep(0.01)
driver.execute_script(
  "var anchorElement = document.querySelector("+\
  "'#connectpay-portal-container > div > div > a:nth-child(1)');"+\
  "if (anchorElement) {"+\
    "var mouseUpEvent = new MouseEvent('mouseup', {"+\
      "bubbles: true,"+\
      "cancelable: true,"+\
      "view: window,"+\
    "});"+\
    "anchorElement.dispatchEvent(mouseUpEvent);"+\
  "}"
)
driver.execute_script(
  "var anchorElement = document.querySelector("+\
  "'#connectpay-portal-container > div > div > a:nth-child(1)');"+\
  "if (anchorElement) {"+\
    "var mouseUpEvent = new MouseEvent('mouseup', {"+\
      "bubbles: true,"+\
      "cancelable: true,"+\
      "view: window,"+\
    "});"+\
    "anchorElement.dispatchEvent(mouseUpEvent);"+\
  "}"
)
driver.execute_script(
  "var anchorElement = document.querySelector("+\
  "'#connectpay-portal-container > div > div > a:nth-child(1)');"+\
  "if (anchorElement) {"+\
    "var mouseUpEvent = new MouseEvent('mouseup', {"+\
      "bubbles: true,"+\
      "cancelable: true,"+\
      "view: window,"+\
    "});"+\
    "anchorElement.dispatchEvent(mouseUpEvent);"+\
  "}"
)
driver.execute_script(
  "var anchorElement = document.querySelector("+\
  "'#connectpay-portal-container > div > div > a:nth-child(1)');"+\
  "if (anchorElement) {"+\
    "var mouseUpEvent = new MouseEvent('mouseup', {"+\
      "bubbles: true,"+\
      "cancelable: true,"+\
      "view: window,"+\
    "});"+\
    "anchorElement.dispatchEvent(mouseUpEvent);"+\
  "}"
)
driver.execute_script(
  "var anchorElement = document.querySelector("+\
  "'#connectpay-portal-container > div > div > a:nth-child(1)');"+\
  "if (anchorElement) {"+\
    "var mouseUpEvent = new MouseEvent('mouseup', {"+\
      "bubbles: true,"+\
      "cancelable: true,"+\
      "view: window,"+\
    "});"+\
    "anchorElement.dispatchEvent(mouseUpEvent);"+\
  "}"
)
driver.execute_script(
  "var anchorElement = document.querySelector("+\
  "'#connectpay-portal-container > div > div > a:nth-child(1)');"+\
  "if (anchorElement) {"+\
    "var mouseUpEvent = new MouseEvent('mouseup', {"+\
      "bubbles: true,"+\
      "cancelable: true,"+\
      "view: window,"+\
    "});"+\
    "anchorElement.dispatchEvent(mouseUpEvent);"+\
  "}"
)
time.sleep(1000000)