import styles from "@/styles/General.module.css"

export default function GeneralComponent() {
    return (
        <>
            <div className={styles.mainInfo}>

                <div className={styles.leftInfoDiv}>

                    <div className={styles.typeDiv}>
                        <div className={styles.labelType}>
                            <label className={styles.allLabel}>Type</label>
                            <select id="type" name="type" className={styles.typeField}>
                                <option  value="simple">simple</option>
                                <option value="variable">variable</option>

                            </select>
                        </div>

                        <div className={styles.labelType}>
                            <label className={styles.allLabel}>Name</label>
                            <input
                                type="text"
                                className={styles.nameField}
                            />
                        </div>

                        <div className={styles.labelType}>
                            <label className={styles.allLabel}>SKU*</label>
                            <input
                                type="text"
                                className={styles.skuField}
                                required />
                        </div>
                    </div>
                    <div className={styles.typeDiv2}>
                        <div className={styles.labelType}>
                            <label className={styles.allLabel}>Country</label>
                            <select id="type" name="type" className={styles.typeField}>
                                <option value="-select-">--Select--</option>
                                <option value="simple">Australia</option>
                                <option value="variable">Canada</option>
                                <option value="variable">Europe</option>
                                <option value="variable">Germany</option>
                                <option value="variable">India</option>
                                <option value="variable">Russia</option>
                                <option value="variable">Singapore</option>
                                <option value="variable">UAE</option>
                                <option value="variable">UK</option>
                                <option value="variable">USA</option>


                            </select>
                        </div>
                        <div className={styles.slugDiv}>
                            <div className={styles.labelType}>
                                <label className={styles.allLabel}>Slug*</label>
                                <input
                                    type="text"
                                    className={styles.slugField}
                                />
                            </div>

                            <input
                                type="text"
                                className={styles.slugField2}
                            />
                        </div>
                        <div className={styles.statusDiv}>
                            <div className={styles.labelType}>
                                <label className={styles.allLabel}>Vendor Product*</label>
                                <select id="type" name="type" className={styles.vendorField}>
                                    <option value="-select-">--Select--</option>
                                    <option value="variable">variable</option>

                                </select>
                            </div>
                            <div className={styles.labelType}>
                                <label className={styles.allLabel}>Status</label>
                                <select id="type" name="type" className={styles.statusField}>
                                    <option value="active">Active</option>
                                    <option value="variable">In-Active</option>

                                </select>
                            </div>
                        </div>



                    </div>
                  
                    <div className={styles.mainPriceDiv}>
                    <p className={styles.pricing}>Pricing</p>
                        <div className={styles.priceDivs}>
                            <div className={styles.labelType}>
                                <label className={styles.allLabel}>Price*</label>
                                <input
                                    type="text"
                                    className={styles.priceField}
                                    placeholder="&nbsp;&nbsp;&nbsp;0.00"
                                />
                            </div>
                            <div className={styles.labelType}>
                                <label className={styles.allLabel}>Sale Price</label>
                                <input
                                    type="text"
                                    className={styles.saleField}
                                      placeholder="&nbsp;&nbsp;&nbsp;0.00"
                                />
                            </div>
                        </div>
                        <h4 className={styles.vendorHeading}>Vendor</h4>
                        <div className={styles.priceDivs2}>

                            <div className={styles.vendorPrice}>

                                <div className={styles.labelType}>
                                    <label className={styles.allLabel}>INR Price*</label>
                                    <input
                                        type="text"
                                        className={styles.inrField}
                                          placeholder="&nbsp;&nbsp;&nbsp;0.00"
                                    />
                                </div>
                                <div className={styles.labelType}>
                                    <label className={styles.allLabel}>Sale Price</label>
                                    <input
                                        type="text"
                                        className={styles.basePriceField}
                                          placeholder="&nbsp;&nbsp;&nbsp;0.00"
                                    />
                                </div>

                            </div>

                            <div className={styles.giftPrice}>
                            <h4 className={styles.giftHeading}>Gift Wrapping</h4>
                                <div className={styles.labelType}>

                                    <label className={styles.allLabel}>Charges</label>
                                    <input
                                        type="text"
                                        className={styles.chargesField}
                                          placeholder="&nbsp;&nbsp;&nbsp;0"
                                    />
                                </div>
                                <div className={styles.labelType}>
                                    <label className={styles.allLabel}>Vendor INR</label>
                                    <input
                                        type="text"
                                        className={styles.vendorInrField}
                                          placeholder="&nbsp;&nbsp;&nbsp;0"
                                    />
                                </div>
                                <div className={styles.labelType}>
                                    <label className={styles.allLabel}>Vendor Base()</label>
                                    <input
                                        type="text"
                                        className={styles.vendorBaseField}
                                          placeholder="&nbsp;&nbsp;&nbsp;0"
                                    />
                                </div>



                            </div>
                        </div>



                    </div>
                    <div className={styles.mainOthersDiv}>
                    <p className={styles.others}>Others</p>
                        <div className={styles.labelType}>

                            <label className={styles.allLabel}>Delivery Location Box</label>
                            <select id="type" name="type" className={styles.locationField}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </select>
                        </div>
                        <div className={styles.labelType}>
                            <label className={styles.allLabel}>Message Box</label>
                            <select id="type" name="type" className={styles.messageField}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </select>
                        </div>
                        <div className={styles.labelType}>
                            <label className={styles.allLabel}>Image Upload</label>
                            <select id="type" name="type" className={styles.messageField}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </select>
                        </div>
                        <div className={styles.labelType}>
                            <label className={styles.allLabel}>Calender Tag</label>
                            <select id="type" name="type" className={styles.tagField}>
                                <option value="select">--Select--</option>
                                <option value="Yes">Calender 2nd Day Delivery</option>

                            </select>
                        </div>
                        <div className={styles.labelType}>
                            <label className={styles.allLabel}>Days To Deliver</label>
                            <input
                                type="text"
                                className={styles.deliverField}
                                  placeholder="&nbsp;&nbsp;&nbsp;0"
                            />
                        </div>


                    </div>

                </div>

                <div className={styles.rightInfoDiv}>
                <p className={styles.tags}>Tags</p>
                    <div className={styles.TopDiv}>
                        <h4 className={styles.topCheckbox}>On Top</h4>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field1" className={styles.checkbox} />
                          &nbsp;&nbsp;  Best Seller
                           
                        </label><br />
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field2"  className={styles.checkbox}/>
                            &nbsp;&nbsp;  Same Day Delivery
                        </label><br />
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field3" className={styles.checkbox} />
                            &nbsp;&nbsp;  New Arrival
                        </label>
                    </div>
                    <div className={styles.BottomDiv}>
                        <h4 className={styles.topCheckbox}>On Bottom</h4>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field1" className={styles.checkbox} />
                          &nbsp;&nbsp; Two Day Delivery
                           
                        </label><br />
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field2"  className={styles.checkbox}/>
                            &nbsp;&nbsp;  Next Day Delivery
                        </label><br />
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field3" className={styles.checkbox} />
                            &nbsp;&nbsp;  3 Hour Delivery
                        </label><br/>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field1" className={styles.checkbox} />
                          &nbsp;&nbsp;  Premium Delivery
                           
                        </label><br />
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field2"  className={styles.checkbox}/>
                            &nbsp;&nbsp;  Product Personalised
                        </label><br />
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" name="field3" className={styles.checkbox} />
                            &nbsp;&nbsp;  Product Sale
                        </label>
                    </div>
                </div>

            </div>
        </>
    )
}

