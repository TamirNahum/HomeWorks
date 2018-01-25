class Cinema {
    private _cinemaName: string;
    private _moviePrice: number;
    private readonly _studentDiscount: number;
    private readonly _teacherDiscount: number;

    public constructor() {
        this._studentDiscount = Math.round((Math.random() * (10)) + 10);
        this._teacherDiscount = Math.round((Math.random() * (5)) + 5);
      
    }
    public get cinemaName(): string {
        return this._cinemaName;
    }

    public set cinemaName(cinemaName: string) {
        this._cinemaName = cinemaName;
    }

    public get moviePrice(): number {
        return this._moviePrice;
    }

    public set moviePrice(moviePrice: number) {
        if (moviePrice >= 30 && moviePrice<=200)
        this._moviePrice = moviePrice;
    }

    public get studentDiscount(): number {
        return this._studentDiscount;
    }

    //public set studentDiscount(studentDiscount: number) {
    //    this._studentDiscount = studentDiscount;
    //}

    public get teacherDiscount(): number {
        return this._teacherDiscount;
    }

    //public set teacherDiscount(teacherDiscount: number) {
    //    this._teacherDiscount = teacherDiscount;
    //}




}