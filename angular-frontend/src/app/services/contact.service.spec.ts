import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });

    service = TestBed.inject(ContactService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that no other requests are outstanding
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should submit contact form and return success message', () => {
    const contactData = { name: 'John Doe', email: 'john.doe@example.com', message: 'Hello, this is a test.' };
    const mockResponse = 'Contact form submitted successfully';

    // Call the submitContactForm method
    service.submitContactForm(contactData).subscribe(response => {
      // Expect the response to match our mock response
      expect(response).toBe(mockResponse);
    });

    // Expect one HTTP POST request to the specified URL
    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('POST');

    // Respond with the mock response
    req.flush(mockResponse);
  });

  it('should handle error response from the server', () => {
    const contactData = { name: 'Jane Doe', email: 'jane.doe@example.com', message: 'Testing error handling.' };
    const mockErrorMessage = 'Failed to submit contact form';

    // Call the submitContactForm method
    service.submitContactForm(contactData).subscribe({
      next: () => fail('Expected an error, not a successful response'),
      error: (error) => {
        // Expect the error message to match our mock error message
        expect(error).toBe(mockErrorMessage);
      }
    });

    // Expect one HTTP POST request to the specified URL
    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('POST');

    // Respond with an error
    req.flush(mockErrorMessage, { status: 500, statusText: 'Internal Server Error' });
  });
});
